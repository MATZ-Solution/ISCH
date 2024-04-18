import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = ({ title, onPress }) => {
  return (
  <Text style={styles.loginText}>
    {title}
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.loginLink}>Login</Text>
    </TouchableOpacity>
  </Text>
  );
};

const styles = StyleSheet.create({
 
    loginText: {
        fontSize: 16,
    color: '#7A7A7A',
    textAlign: 'center',
    marginBottom: 20,

  },
  loginLink: {
    fontSize: 16,
    color: '#0470BA',
    fontWeight: 'bold',
    
  },
});

export default LoginButton;
