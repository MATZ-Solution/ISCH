import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/button';
import SignUpInfo from './clinical/signup_info';
import LoginButton from '../components/login_button';
import Status from './clinical/clinical_status';
import AddProfilePic from './clinical/add_profile_pic';
import Otp from './clinical/otp';
import SignUp from './clinical/signup';
import ManagePrivacy from './clinical/manage_privacy';
import ThankYou from './clinical/thankyou';

const UserSelection = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === 'clinical') {
      navigation.navigate('ThankYou');
    } else if (selectedOption === 'patient') {
      navigation.navigate('PatientScreen');
    } else {
      alert('Please select an option');
    }
  };



  const renderOption = (option, imageSource, text) => {
    const isSelected = selectedOption === option;
    return (
      <TouchableOpacity
        style={[styles.optionContainer, isSelected && styles.selectedOption]}
        onPress={() => handleSelection(option)}
      >
        <Image source={imageSource} style={styles.optionImage} />
        <Text style={styles.optionStartText}>Get Started with</Text>
        <Text style={styles.optionText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <View style={styles.container2}>
        <Text style={{ marginTop: 5, fontSize: 15, color:'white' }}>Welcome to</Text>
        <Text style={{ fontSize: 23, fontWeight: 'bold', color:'white' }}>InfoSenior Care App</Text>
        <Text style={{ marginTop: 3, textAlign: 'center', color:'white', paddingHorizontal: 70, paddingBottom: 20 }}>
          Please enter your correct details below for signing-up on "Infosenior.care"
        </Text>
        <View style={styles.container3}>
          <View style={styles.optionsContainer}>
            {renderOption('clinical', require('../assets/images/17.png'), 'Clinical')}
            {renderOption('patient', require('../assets/images/18.png'), 'Patient')}
          </View>
          <View style={{width: '80%', alignItems: 'center'}}>
          <CustomButton title="Next" onPress={handleSubmit} />
          </View>
          <View style={{ marginTop: 20}}>
        <LoginButton/>
      </View>
        </View>
      </View>
    </View>
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
    height: '60%',
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
    height: '75%',
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  logo: {
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 40,

  },
    optionContainer: {
      flexDirection: 'column',
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    height: 120,
    borderColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    width: 150,
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: '#0470BA',
  },
  optionImage: {
    marginTop: -70,
   

  },
  optionStartText: {
    color: '#0470BA',
    fontSize: 10,
    marginTop: 5,
  },
  optionText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default UserSelection;
