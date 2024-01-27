import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import BiometricLogin from '../screens/BiometricLoginScreen';
import TransactionHistory from '../screens/TransactionHistoryScreen';
import TransactionDetail from '../screens/TransactionDetailScreen';
import { RootState } from '../configs/store';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <>
                        <Stack.Screen
                            name="TransactionHistory"
                            component={TransactionHistory}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="TransactionDetail"
                            component={TransactionDetail}
                            options={{ headerShown: false }}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name="BiometricLogin"
                        component={BiometricLogin}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;