import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const AddProfilePic = () => {
  const handleSubmit = () => {
    navigation.navigate('SignUp');
  };
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <>
      <View style={styles.container}>
        {/* <Image source={require('')} style={styles.logo} /> */}
        <Image source={require('../../assets/images/hydrate.png')} style={styles.logo} />
        <Text style={{ fontSize: 15, color:'white', fontSize: 12 }}>Seamless Communication &</Text>
        <Text style={{ fontSize: 23, fontWeight: 'bold', color:'white' }}>Stay Warm</Text>
        <View style={styles.line}></View>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingHorizontal: 60, fontSize: 13}}>
        winter wellness starts with self-care. Embrace nourishing soups and cozy blankets for a healthier you.        
        </Text>
        <View style={styles.container2}>
        <Image source={require('../../assets/images/only_logo.png')} style={styles.logo} />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color:'white' }}>Add Profile Pic</Text>
            <View style={styles.line}></View>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingBottom: 20, fontSize: 13 , paddingHorizontal: 70 }}>
        Please enter your correct details below for signing-up on “Infosenior.care”.        
        </Text>
          <View style={styles.container3}>
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
    height: '70%',
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
    height: '70%',
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
    marginBottom: 20,
    width: 50,
    height: 50,

  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginBottom: 3,
    marginTop: 3,
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
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
});

export default AddProfilePic;
