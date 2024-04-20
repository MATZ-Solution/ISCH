import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Signed = () => { 

  return (  
    <View style={styles.container}> 
      <View style={{ paddingTop: 50, paddingLeft: 20 }}> 
        <Text style={{ color: 'black', fontSize: 27, fontWeight: '800' }}>Sign Legal Documents</Text>  
        <View style={{ backgroundColor: 'white', width: '95%', borderRadius: 10, borderColor: '#C7D0D8', borderWidth: 1, height: '85%', marginTop: 10 }}>
          <ScrollView>
          <Text style={{ color: 'black', fontSize: 24, fontWeight: '700' , padding:10 }}>Sign Legal Documents</Text>  
            <Text style={{ color: 'black', fontSize: 15, fontWeight: '400', padding: 10 }}>
              InfoSenior Care provides a secure, end-to-end encrypted HIPAA-compliant messaging and telecommunication platform. The following legal documents and agreements need to be reviewed in their entirety and signed.
            </Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: '400', padding: 10 }}>
            1.  I have reviewed Community Guidelines{'\n'}
            2.  I have reviewed Business Associate Agreement {'\n'}
            3.  I have reviewed Service Agreement{'\n'}
            4.  I will adhere to HIPAA Privacy and security Rule.{'\n'}
            5.  I will not share any Protected Health Information            </Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: '400', padding: 10 }}>
            I have reviewed the above legal documents and guidelines. InfoSenior Care. and I would like to establish a legally binding relationship.            </Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' , padding:10 }}>Sign</Text>  

          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Signed;