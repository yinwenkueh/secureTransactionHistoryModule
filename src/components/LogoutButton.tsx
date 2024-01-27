import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

interface LogoutButtonProps {
  onPress: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="logout" size={25} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00bfff',
    borderRadius: 8,
    position: 'absolute',
    top: 30,
    right: 10,
  },
  icon: {
    justifyContent:'center',
    alignItems:'center',
  }
});

export default LogoutButton;