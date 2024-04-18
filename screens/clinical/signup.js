import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ContinueWithGoogleButton from '../../components/google_button';
import ContinueWithAppleButton from '../../components/apple_button';
import CustomButton from '../../components/button';
import LoginButton from '../../components/login_button';

const SignUp = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleGooglePress = () => {
    // Implement Google sign-in logic here
    console.log('Continue with Google pressed');
  };

  const handleApplePress = () => {
    // Implement Apple sign-in logic here
    console.log('Continue with Apple pressed');
  };

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSubmit = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
            <Image source={require('../../assets/images/only_logo.png')} style={styles.logo} />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color:'white' }}>InfoSenior Care App</Text>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingHorizontal: 70, paddingBottom: 20, fontSize: 13 }}>
          Please enter your correct details below for signing-up on "Infosenior.care"
        </Text>
          <View style={styles.container3}>
          <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={rePassword}
        onChangeText={setRePassword}
        placeholder="Re-password"
        secureTextEntry
      />

     <View style={styles.horizontalOR}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <ContinueWithGoogleButton onPress={handleGooglePress} />
      <ContinueWithAppleButton onPress={handleApplePress} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
      <Text style={styles.loginText}>
            Already have an account? 
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
            </Text>
            
      
        </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0470BA',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container2: {
    height: '85%',
    width: '100%',
    backgroundColor: '#0470BA',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 3,
    borderColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: 20,
  },
  container3: {
    height: '80%',
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  logo: {
    marginBottom: 5,
  },

  input: {
    height: 40,
    width: '80%',
    padding: 10,
    
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#C7D0D8',
    borderWidth: 1,
    fontSize: 16,
  },
  horizontalOR: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  line: {
    width: 50,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
    marginLeft: 10,
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
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

button: {
    backgroundColor: '#0470BA',
    height: 50,
    padding: 10,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SignUp;
