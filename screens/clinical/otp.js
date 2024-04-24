import React, { useRef } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import AddProfilePic from './add_profile_pic';


const Opt = () => {
  const navigation = useNavigation();

  const [otp, setOtp] = React.useState(['', '', '', '']);
  const refs = useRef([]);

  const handleOtpChange = (text, index) => {
    setOtp((prevOtp) => {
      const otpArray = [...prevOtp];
      otpArray[index] = text;
      return otpArray;
    });

    // Move focus to the next TextInput
    if (text && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };
  const handleSubmit = () => {
    navigation.navigate('AddProfilePic');
  };
  return (
    <>
      <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={require('../../assets/images/only_logo.png')} style={styles.logo} />
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>OTP Verification</Text>
        <View style={styles.line}></View>
        <Text style={{ marginTop: 3, textAlign: 'center', color: 'white', paddingHorizontal: 70, paddingBottom: 20, fontSize: 13 }}>
          Please enter your correct details below for signing-up on “Infosenior.care”.
        </Text>
        <View style={styles.container3}>
          <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'w500' }}>We send you a Code</Text>
          <Text style={{ fontSize: 16, marginBottom: 30, fontWeight: 'w400' }}>We sent it your email address.</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {otp.map((value, index) => (
              <TextInput
                ref={(el) => (refs.current[index] = el)}
                key={index}
                style={styles.otp_box}
                maxLength={1}
                onChangeText={(text) => handleOtpChange(text, index)}
                value={value}
                keyboardType="numeric"
              />
            ))}
          </View>
          <View style={{ width: '80%', marginTop: 20 }}>
            <CustomButton title="Next" onPress={handleSubmit} />
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
    marginBottom: 0,
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginBottom: 3,
    marginTop: 3,
  },
  otp_box: {
    width: 60,
     height: 80,
     backgroundColor: '#F8F8F8',
      borderWidth: 1,
       padding: 10,
        textAlign: 'center',
        justifyContent: 'center',
         borderRadius: 7,
         borderColor: '#D1D0D0',
         fontSize: 45,
         fontWeight: 'bold',
         color: '#0470BA',
         marginBottom: 20,
         marginHorizontal: 10,
  },
});

export default Opt;
