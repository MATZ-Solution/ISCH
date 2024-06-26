import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/button';
import LoginButton from '../../components/login_button';
import { useNavigation } from '@react-navigation/native';
import ManagePrivacy from './manage_privacy';

const Status = () => {
  const navigation = useNavigation()
  ;
  const handleSubmit = () => {
    navigation.navigate('ManagePrivacy');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <>
      <View style={styles.container}>
        {/* <Image source={require('')} style={styles.logo} /> */}
        <Image source={require('../../assets/images/hydrate.png')} style={styles.logo} />
        <Text style={{ fontSize: 15, color:'white', fontSize: 12 }}>Health Tip</Text>
        <Text style={{ fontSize: 23, fontWeight: 'bold', color:'white' }}>Stay Hydrated</Text>
        <View style={styles.line}></View>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingHorizontal: 70, fontSize: 13}}>
        Drink plenty of water throughout the day to keep your body functioning optimally.        
        </Text>
        <View style={styles.container2}>
        <Image source={require('../../assets/images/only_logo.png')} style={styles.logo} />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color:'white' }}>Verification</Text>
            <View style={styles.line}></View>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingBottom: 20, fontSize: 13 , paddingHorizontal: 70 }}>
          Please enter your correct details below for signing-up on "Infosenior.care"
        </Text>
          <View style={styles.container3}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color:'black' }}>Verification</Text>
          <Text style={{ marginTop: 3, textAlign: 'center', color:'#7A7A7A', paddingBottom: 20, fontSize: 16 , paddingHorizontal: 20 }}>
          All clinicians and para-clinical staff are verified.{'\n'} Clinicians in the United States will be automatically verified in the National {'\n'}Practitioner Data Bank NPDB.
          {'\n'}{'\n'}Please send supporting documents for {'\n'}verification to           
          verify@InfoSenior Care.{'\n'} if you are not in the NPDB database.{'\n'} InfoSenior Care. can only be used by{'\n'} verified clinicians or para-clinical staff.
          </Text>

          <View style={{width: '80%', marginTop: 10}}>
      <CustomButton title="Next" onPress={handleSubmit} />
      </View>

      <View style={{ marginTop: 20}}>
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
});

export default Status;
