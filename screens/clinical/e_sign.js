import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, TextInput } from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';
import CustomButton from '../../components/button';

const Sign = () => {
  const signatureRef = useRef(null);
  const [signatureEnabled, setSignatureEnabled] = useState(true);
  const [fullName, setFullName] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [organizationName, setOrganizationName] = React.useState('');
  const [businessAddress, setBusinessAddress] = React.useState('');
  const [businessEmail, setBusinessEmail] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSignature = () => {
    if (signatureRef.current) {
      const signature = signatureRef.current.saveImage();
      if (signature) {
        Alert.alert('Signature', 'Signature captured successfully!');
      } else {
        Alert.alert('Signature', 'Please provide a signature.');
      }
    }
  };

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clearSignature();
    }
  };

  const handleSignatureStart = () => {
    setSignatureEnabled(false);
  };

  const handleSignatureEnd = () => {
    setSignatureEnabled(true);
  };

  return (
    <View style={styles.container}>
        <View style={{ paddingTop: 50, paddingLeft: 20 }}>
          <Text style={{ color: 'black', fontSize: 27, fontWeight: '800' }}>Sign Legal Documents</Text>
          <View style={{ backgroundColor: 'white', width: '95%', borderRadius: 10, borderColor: '#C7D0D8', borderWidth: 1, height: '80%', marginTop: 10 }}>
            <ScrollView>
              <Text style={{ color: 'black', fontSize: 24, fontWeight: '700', padding: 10 }}>Sign Legal Documents</Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400', padding: 10 }}>
                InfoSenior Care provides a secure, end-to-end encrypted HIPAA-compliant messaging and telecommunication platform. The following legal documents and agreements need to be reviewed in their entirety and signed.
              </Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400', padding: 10 }}>
                1.  I have reviewed Community Guidelines{'\n'}
                2.  I have reviewed Business Associate Agreement {'\n'}
                3.  I have reviewed Service Agreement{'\n'}
                4.  I will adhere to HIPAA Privacy and security Rule.{'\n'}
                5.  I will not share any Protected Health Information
              </Text>
              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' , padding: 10 }}>Sign</Text>  

                <TextInput
                  style={inputStyle}
                  placeholder="Full Name"
                  value={fullName}
                  onChangeText={setFullName}
                />
                <TextInput
                  style={inputStyle}
                  placeholder="Designation"
                  value={designation}
                  onChangeText={setDesignation}
                />
                <TextInput
                  style={inputStyle}
                  placeholder="Organization Name"
                  value={organizationName}
                  onChangeText={setOrganizationName}
                />
                <TextInput
                  style={inputStyle}
                  placeholder="Business Address"
                  value={businessAddress}
                  onChangeText={setBusinessAddress}
                />
                <TextInput
                  style={inputStyle}
                  placeholder="Business Email"
                  value={businessEmail}
                  onChangeText={setBusinessEmail}
                />
                <TextInput
                  style={inputStyle}
                  placeholder="Date"
                  value={date}
                  onChangeText={setDate}
                />
              </View>
              <View style={{backgroundColor: 'white', width: '90%',marginLeft: 20 }}>
              <View style={{ flex: 1, height: 200, borderColor: '#C7D0D8', borderWidth: 1 }}>
          <SignatureCanvas
            ref={signatureRef}
            backgroundColor="#ffffff"
            penColor="black"
            placeholder="Sign here"
            canvasProps={{ 
              width: '95%', 
              height: 200, 
              className: 'signatureCanvas',
              style: { 
                borderRadius: 10, 
                borderColor: '#C7D0D8', 
                borderWidth: 1,
                pointerEvents: signatureEnabled ? 'auto' : 'none' 
              },
              onTouchStart: handleSignatureStart,
              onTouchEnd: handleSignatureEnd,
            }}
          />
        </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, marginTop: 10, paddingBottom: 10 }}>
                  <TouchableOpacity onPress={handleClear} style={buttonStyle}>
                    <Text style={{ color: 'white' }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleSignature} style={buttonStyle}>
                    <Text style={{ color: 'white',  }}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            
            
          </View>
          <View style={{paddingTop: 30}}>
              <CustomButton title="Next" />
            </View>
        </View>
    </View>
  );
};

const buttonStyle = {
  backgroundColor: '#0470BA',
  padding: 10,
  borderRadius: 5,
};

const inputStyle = {
  height: 50,
    width: '100%',
    padding: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#C7D0D8',
    borderWidth: 1,
    fontSize: 16,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    width: '80%',
    padding: 10,
    
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#C7D0D8',
    borderWidth: 1,
    fontSize: 16,
  },
});

export default Sign;
