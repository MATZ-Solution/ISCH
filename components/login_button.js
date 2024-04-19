import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const LoginButton = ( ) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,

    }}>
  <Text style={styles.loginText}>
    Already have an account?</Text>
    <TouchableOpacity onPress={handleLoginPress}>
      <Text style={styles.loginLink}>Login</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
 
    loginText: {
        fontSize: 16,
    color: '#7A7A7A',
    textAlign: 'center',

  },
  loginLink: {
    fontSize: 16,
    color: '#0470BA',
    fontWeight: 'bold',
    
  },
});

export default LoginButton;
