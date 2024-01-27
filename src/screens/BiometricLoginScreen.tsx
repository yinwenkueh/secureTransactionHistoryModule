import React, { useEffect } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authAction';
import ReactNativeBiometrics from 'react-native-biometrics'
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../components/LoginButton';

const BiometricLogin = () => {
    const rnBiometrics = new ReactNativeBiometrics()
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => { 
        const checkBiometrics = async () => {
            const { biometryType } = await rnBiometrics.isSensorAvailable()

            if(biometryType == undefined){
                Alert.alert("This device not support for Biometric Login")
            }
        };
        checkBiometrics();

    }, []);

    const handleBiometricLogin = async () => {
        ;
        rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to view amount' })
            .then((resultObject) => {
                const { success } = resultObject
                if (success) {
                    dispatch(loginSuccess());
                    navigation.navigate('TransactionHistory')
                } else {
                    Alert.alert('Authentication failed', 'Please try again');
                }
            })
            .catch(() => {
                Alert.alert("This device not support for Biometric Login")
            })
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ padding:25, fontWeight:'bold', fontSize:24}}>Secure Transaction History</Text>
            <LoginButton onPress={handleBiometricLogin} />
        </SafeAreaView>
    );
};

export default BiometricLogin;