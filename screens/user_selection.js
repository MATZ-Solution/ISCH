import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/button';
const UserSelection = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      navigation.navigate('NextScreen', { selectedOption });
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
          <CustomButton title="Next" onPress={handleSubmit} /> 
          
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
    justifyContent: 'center',
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
    marginBottom: 20,

  },
  optionContainer: {
    flexDirection: 'column',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    alignItems: 'center',

    justifyContent: 'center',
    borderWidth: 3,
    height: 120,
    borderColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    width: 170,
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
