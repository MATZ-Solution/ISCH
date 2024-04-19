import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/button';

const ThankYou = () => {

    const handleSubmit = () => {
        navigation.navigate('SignUp');
      };

return(
<View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <View style={styles.container2}>
      <Image source={require('../../assets/images/thankyou.png')} style={styles.thankyou} />
      <Text style={{ marginTop: 5, fontSize: 27, color:'black', fontWeight: '900', paddingBottom:10 }}>Thanks  
      <Text style={{ color: '#0470BA'}}> Dr. Talha Shaikh</Text>
      </Text>

      <Text style={{ marginTop: 3, textAlign: 'center', color:'#7A7A7A', paddingBottom: 30, fontSize: 16 , paddingHorizontal: 20 }}>
      Thanks for signing Up. A confirmation email
       has been sent to your provided email adress. To verify your clinician 
       status, click the given link.</Text>

       <View style={{width: '90%', alignItems: 'center', padding:20}}>
          <CustomButton title="Next" onPress={handleSubmit} />
          </View>
        
      </View>
    </View>
)};

const styles = StyleSheet.create({

container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0470BA',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container2: {
    height: '60%',
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: 20,
  },
  
  logo: {
    marginBottom: 50,
  },
  thankyou: {
    marginBottom: 50,
  },
});

export default ThankYou;