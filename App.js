import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/splash_screen';
import UserSelection from './screens/user_selection';
import SignUp from './screens/clinical/signup';
import SignUpInfo from './screens/clinical/signup_info';
import Status from './screens/clinical/clinical_status';
import AddProfilePic from './screens/clinical/add_profile_pic';
import Otp from './screens/clinical/otp';
import ManagePrivacy from './screens/clinical/manage_privacy';
import ThankYou from './screens/clinical/thankyou';
import Sign from './screens/clinical/e_sign';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SplashScreen}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserSelection" component={UserSelection} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpInfo" component={SignUpInfo} options={{ headerShown: false }} />
        <Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
        <Stack.Screen name="AddProfilePic" component={AddProfilePic} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="ManagePrivacy" component={ManagePrivacy} options={{ headerShown: false }} />
        <Stack.Screen name='ThankYou' component={ThankYou} options={{ headerShown: false }} />
        <Stack.Screen name='Sign' component={Sign} options={{ headerShown: false }} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
