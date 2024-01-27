import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl, Alert, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configs/store';
import { setTransactions } from '../actions/transactionAction';
import { Transaction } from "../types/types";
import sampleTransactions, { pullRefreshAddRandomTransactions } from '../utils/GenerateSampleTransactionData';
import ReactNativeBiometrics from 'react-native-biometrics'
import { logout, setAuthForSensitiveData } from '../actions/authAction';
import SecureDataViewer from '../components/SecureDataViewer';
import { useNavigation } from '@react-navigation/native';
import accNumber from '../utils/GenerateSampleAccData';
import LogoutButton from '../components/LogoutButton';

const TransactionHistoryScreen = () => {
    const rnBiometrics = new ReactNativeBiometrics()
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const transactions = useSelector((state: RootState) => state.transactions);
    const isAuthForSensitiveData = useSelector((state: RootState) => state.auth.isAuthForSensitiveData);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const sortedTransactions = sampleTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        dispatch(setTransactions(sortedTransactions));
    }, []);

    const handleLogout = async () => {
        dispatch(logout())
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        pullRefreshAddRandomTransactions();
        const sortedTransactions = sampleTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        dispatch(setTransactions(sortedTransactions));
        setRefreshing(false);
    };

    const handleTransactionPress = async (transaction: Transaction) => {
        if (isAuthForSensitiveData)
            navigation.navigate('TransactionDetail', { transaction });
        else
            Alert.alert("Please click See full details before proceed to view transaction details.")
    };

    const handleFullDetailsPress = async () => {
        rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to view amount' })
            .then((resultObject) => {
                const { success } = resultObject
                if (success) {
                    dispatch(setAuthForSensitiveData());
                } else {
                    Alert.alert('Authentication failed', 'Please try again');
                }
            })
            .catch(() => {
                Alert.alert("This device not support for Biometric Login")
            })
    };

    const renderTransactionItem = ({ item }: { item: Transaction }) => (
        <TouchableOpacity style={styles.transactionItem} onPress={() => handleTransactionPress(item)}>
            <View>
                <Text style={styles.primaryText}>{item.description}</Text>
                <Text style={styles.secondaryText}>{item.date}</Text>
            </View>
            <View style={styles.transactionItemCenter}>
                {item.type === 'Credit' ?
                    <Text style={styles.amountTextCredit}>{item.currency}<SecureDataViewer data={item.amount} style={styles.amountTextCredit} /></Text> :
                    <Text style={styles.amountTextDebit}>{item.currency}<SecureDataViewer data={item.amount} style={styles.amountTextDebit} /></Text>}
                <Text style={styles.secondaryText}>{item.type}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.genericText}>seaMoney Account</Text>
                <SecureDataViewer type={'acc'} data={accNumber} style={styles.accountNumber} />
                {!isAuthForSensitiveData ?
                    <TouchableOpacity onPress={handleFullDetailsPress} style={styles.fullDetailsButton}>
                        <Text style={styles.genericText}>See full details</Text>
                    </TouchableOpacity> : null}
            </View>
            <FlatList
                data={transactions}
                contentContainerStyle={styles.transactionList}
                renderItem={renderTransactionItem}
                keyExtractor={(item, index) => `${index}`}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
            />
            <LogoutButton onPress={handleLogout} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bfff'
    },
    header: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    genericText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    accountNumber: {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    fullDetailsButton: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bfff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
    },
    transactionList: {
        flexGrow: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    transactionItemCenter: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryText: {
        color: '#434343'
    }, 
    secondaryText: {
        color: 'grey', fontSize: 12
    },
    amountTextDebit: {
        fontWeight: 'bold',
        color: 'green'
    },
    amountTextCredit: {
        fontWeight: 'bold',
        color: '#134343'
    }
});

export default TransactionHistoryScreen;