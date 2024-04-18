import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ContinueWithGoogleButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('../assets/images/google_icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    marginTop: 10,
    borderColor: '#C7D0D8',
    borderWidth: 1,
  },
  text: {
    color: '#7A7A7A',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default ContinueWithGoogleButton;
