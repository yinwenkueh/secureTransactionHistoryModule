import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
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
        margin:15,
        borderRadius: 8,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BackButton;