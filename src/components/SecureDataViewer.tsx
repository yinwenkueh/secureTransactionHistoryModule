// src/components/SecureDataViewer.tsx
import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../configs/store';
import { maskAccountNumber } from '../utils/MaskingData';

const SecureDataViewer = (props: any) => {
    const isAuthForSensitiveData = useSelector((state: RootState) => state.auth.isAuthForSensitiveData);

    return (
        isAuthForSensitiveData ? (
            <Text style={{ ...props.style }}>{props.data}</Text>
        ) : (
            <Text style={{ ...props.style }}>{props.type === 'acc' ? maskAccountNumber(props.data) : '*****'}</Text>
        )
    );
};

export default SecureDataViewer;
