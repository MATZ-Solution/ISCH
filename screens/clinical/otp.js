import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Opt = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <Image source={require('')} style={styles.logo} /> */}
        <View style={styles.container2}>
          <View style={styles.container3}></View>
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
    height: '60%',
    width: '100%',
    backgroundColor: '#0470BA',
    alignItems: 'flex-end',
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
  },
});

export default Opt;
