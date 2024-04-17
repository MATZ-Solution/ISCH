import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const fadeAnim = new Animated.Value(0);
  const navigation = useNavigation();

  useEffect(() => {
    const animateAndNavigate = async () => {
      // Animate the logo fade-in
      await Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000, // 2 seconds
          useNativeDriver: true,
        }
      ).start();

      // Navigate to UserScreen
      navigation.navigate('UserScreen');
    };

    animateAndNavigate();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/logo.png')} // Replace with your logo path
        style={{ ...styles.logo, opacity: fadeAnim }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0470BA',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
