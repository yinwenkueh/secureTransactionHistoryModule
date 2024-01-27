import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

interface BackButtonProps {
    onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            { Platform.OS === 'android' ?
                < Icon name="arrow-back" size={25} color="#00bfff" style={styles.icon} />
                : <Icon name="arrow-back-ios" size={25} color="#00bfff" style={styles.icon} />
                }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        position: 'absolute',
        top: 30, 
        left: 10, 
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BackButton;