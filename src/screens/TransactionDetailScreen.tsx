// TransactionDetailScreen.tsx
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Transaction } from "../types/types";
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type TransactionDetailProps = {
    route: {
        params: {
            transaction: Transaction;
        };
    };
};

const TransactionDetailScreen = ({ route }: TransactionDetailProps) => {
    const { transaction } = route.params;
    const navigation = useNavigation();

    const handleBack = async () => {
        navigation.goBack();
    };

    const handleCopyTransactionId = () => {
        Clipboard.setString(transaction.id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {transaction.type === 'Credit' ?
                    <Text style={styles.headerTextCredit}>{transaction.currency}{transaction.amount}</Text> :
                    <Text style={styles.headerTextDebit}>{transaction.currency}{transaction.amount}</Text>}
                <Text style={styles.primaryText}>{transaction.description}</Text>
                <Text style={styles.secondaryText}>{transaction.date}</Text>
            </View>

            <View style={styles.cardSeperate}>
                <View>
                    <Text style={styles.primaryText}>Type</Text>
                    <Text style={styles.primaryText}>Remark</Text>
                    <Text style={styles.primaryText}>Transaction ID</Text>
                </View>
                <View style={{ alignItems: 'flex-end', }} >
                    <Text style={styles.primaryText}>{transaction.type}</Text>
                    <Text style={styles.primaryText}>{transaction.remark}</Text>
                    <TouchableOpacity onPress={handleCopyTransactionId} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.transactionID} numberOfLines={3}>{transaction.id}</Text>
                        <Icon name="content-copy" size={20} color="gray" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.primaryText}>Report an issue</Text>
            </View>

            <BackButton onPress={handleBack} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        marginTop: 60,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardSeperate: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        marginTop: 10,
        elevation: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerTextDebit: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    },
    headerTextCredit: {
        color: '#134343',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    },
    primaryText: {
        color: '#434343',
        padding: 5
    }, secondaryText: {
        color: 'grey', fontSize: 12,
        padding: 5,
    },
    transactionID: {
        width: 180,
        color: 'grey', fontSize: 12,
        padding: 5,
        lineHeight: 20,
        textAlign: 'right'
    }, icon: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default TransactionDetailScreen;
