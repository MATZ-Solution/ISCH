import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Status from './clinical_status';

import CustomButton from '../../components/button';
import LoginButton from '../../components/login_button';

const AddProfilePic = () => {
  const navigation = useNavigation();


  const handleSubmit = () => {
    navigation.navigate('Status');
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
          <View style={styles.pic_container}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/add_profile.png')} style={styles.profile} />
          </TouchableOpacity>
        </View>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color:'black', marginTop:20 }}>Upload a Profile Picture</Text>
          <Text style={{ marginTop: 3, textAlign: 'center', color:'black', paddingBottom: 20, fontSize: 13 , paddingHorizontal: 50 }}>
          Please upload a profile photo without any masks or glasses for accurate identification.</Text>
         
      
    <View style={{width: '80%', marginTop: 20}}>
      <CustomButton title="Next" onPress={handleSubmit} />
      </View>

      <View style={{}}>
        <LoginButton/>
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
    height: '65%',
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
    marginBottom: 5,
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
pic_container: {
  width: '80%',
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
}
});

export default AddProfilePic;
