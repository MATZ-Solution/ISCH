import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContinueWithGoogleButton from '../../../components/google_button';
import ContinueWithAppleButton from '../../../components/apple_button';
import CustomButton from '../../../components/button';
import LoginButton from '../../../components/login_button';
import SignUpButton from '../../../components/signup_button';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleGooglePress = () => {
    // Implement Google sign-in logic here
    console.log('Continue with Google pressed');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword'); // Navigate to the ForgotPassword screen
  };

  const handleApplePress = () => {
    // Implement Apple sign-in logic here
    console.log('Continue with Apple pressed');
  };
  const handleSubmit = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <>
      <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.container2}>
            
            <Text style={{ fontSize: 15, color:'white', paddingTop: 15 }}>Welcome to</Text>
            <View style={styles.line}></View>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingHorizontal: 70, paddingBottom: 20, fontSize: 23, fontWeight: 'bold' }}>
          InfoSenior Care App
        </Text>
          <View style={styles.container3}>
          <Text style={{ fontSize: 27, color:'black', fontWeight: 'bold' }}>Login</Text>
          <Text style={{ marginTop: 3, textAlign: 'center', color:'#7A7A7A', paddingHorizontal: 40, fontSize: 18, paddingBottom: 20, alignItems: 'center',
    justifyContent: 'center'}}>
          Please enter your correct details below for signing-in on “Infosenior.care”.</Text>
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
    <View style={{ marginTop: 0, width: '80%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      

     <View style={styles.horizontalOR}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <ContinueWithGoogleButton onPress={handleGooglePress} />
      <ContinueWithAppleButton onPress={handleApplePress} />

      <View style={{width: '80%', marginTop: 40}}>
      <CustomButton title="Next" onPress={handleSubmit} />
      </View>

      <View style={{}}>
        <SignUpButton/>
      </View>

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
    height: '72%',
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
    height: '87%',
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  logo: {
    width: 220,
    height: 150,
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
    marginBottom: 0,
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
  forgotPasswordText: {
    marginBottom: 10,
    fontSize: 16,
    color: '#0470BA',
    textDecorationLine: 'underline',
  }
});

export default Login;
