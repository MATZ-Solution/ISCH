import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../components/button';
import { initialText } from "../../text/text_1";
import Sign from "./e_sign";

const Checkbox = ({ value, onValueChange }) => (
  <TouchableOpacity 
    onPress={() => onValueChange(!value)} 
    style={{
      width: 24, 
      height: 24, 
      backgroundColor: '#378CE7', 
      borderRadius: 4, 
      marginRight: 10, 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
    {value && (
      <FontAwesome name="check" size={14} color="white" />
    )}
  </TouchableOpacity>
);

const limitWords = (text, limit) => {
  const words = text.split(' ');
  return words.slice(0, limit).join(' ') + (words.length > limit ? '' : '');
};

const ManagePrivacy = ({ navigation }) => {
  const [acceptedGuidelines, setAcceptedGuidelines] = useState(false);
  const [acceptedServiceAgreement, setAcceptedServiceAgreement] = useState(false);
  const [acceptedBusinessAgreement, setAcceptedBusinessAgreement] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [viewHeight, setViewHeight] = useState(105); // Initial height

  const toggleText = () => {
    setShowFullText(!showFullText);
    setViewHeight(showFullText ? 105 : 'auto');
  };

  const handleSubmit = () => {
    if (acceptedGuidelines && acceptedServiceAgreement && acceptedBusinessAgreement) {
      navigation.navigate('Sign');
    } else {
      Alert.alert('Alert', 'Please accept all agreements before proceeding.');
    }
  };

  return (  
    <View style={styles.container}> 
      <ScrollView>
        <View style={{ paddingTop: 50, paddingLeft: 20 }}> 
          <Text style={{ color: 'black', fontSize: 27, fontWeight: '800' }}>Review Legal Documents</Text>  
          <Text style={{ color: '#7A7A7A', fontSize: 15, fontWeight: '400', paddingTop: 10, paddingRight: 10 }}>
            By consenting to the following InfoSenior Care. can provide the best experience possible.
            You can manage your privacy at any time in Settings. We collect data usage to improve our 
            application and its impact. You can read more about how we collect, process, and use your 
            data on our Privacy page.
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 , paddingLeft: 20, paddingRight: 20, justifyContent: "space-between" }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Community Guidelines</Text>
          <Checkbox value={acceptedGuidelines} onValueChange={setAcceptedGuidelines} />
        </View>

        <View style={{ marginTop: 20, height: 150, width: '92%',
         height: viewHeight, backgroundColor: 'white', marginLeft: 18,
          justifyContent: 'center', alignItems: 'center', borderRadius: 10,
          borderColor: '#C7D0D8', borderWidth: 1,
           shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          <ScrollView>
            <Text style={{ color: '#000000', textAlign: 'left', fontSize: 15, paddingLeft: 5, paddingRight: 5 }}>
              {showFullText ? initialText : limitWords(initialText, 30)}
            </Text>
          </ScrollView>
          <TouchableOpacity onPress={toggleText}>
            <Text style={{ color: '#0470BA', marginTop: 10, textAlign: 'left' }}>
              {showFullText ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 , paddingLeft: 20, paddingRight: 20, justifyContent: "space-between" }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Service agreement</Text>
          <Checkbox value={acceptedServiceAgreement} onValueChange={setAcceptedServiceAgreement} />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 , paddingLeft: 20, paddingRight: 20, justifyContent: "space-between" }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Business Association Agreement</Text>
          <Checkbox value={acceptedBusinessAgreement} onValueChange={setAcceptedBusinessAgreement} />
        </View>

        <View style={{ width: '80%', marginTop: 20, marginLeft: 40 }}>
          <CustomButton title="Next" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
});

export default ManagePrivacy;

// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
// import CustomButton from '../../components/button';
// import { initialText } from "../../text/text_1";
// import { useNavigation } from '@react-navigation/native';
// import GuidelineExpand from "../../components/guideline_expand";
// import { initialText2 } from "../../text/text_2";
// import { initialText1 } from "../../text/text_3";
// import { FontAwesome } from '@expo/vector-icons';

// const Checkbox = ({ value, onValueChange }) => (
//   <TouchableOpacity 
//     onPress={() => onValueChange(!value)} 
//     style={{
//       width: 24, 
//       height: 24, 
//       backgroundColor: '#378CE7', 
//       borderRadius: 4, 
//       marginRight: 10, 
//       alignItems: 'center', 
//       justifyContent: 'center' 
//     }}>
//     {value && (
//       <FontAwesome name="check" size={14} color="white" />
//     )}
//   </TouchableOpacity>
// );

// const ManagePrivacy = ({ navigation }) => {
//   const [acceptedServiceAgreement, setAcceptedServiceAgreement] = useState(true);
//   const [acceptedBusinessAgreement, setAcceptedBusinessAgreement] = useState(true);

//   const handleSubmit = () => {
//     if (acceptedServiceAgreement && acceptedBusinessAgreement) {
//       navigation.navigate('Sign');
//     } else {
//       Alert.alert('Alert', 'Please accept all agreements before proceeding.');
//     }
//   };

//   return (  
//     <View style={styles.container}> 
//       <ScrollView>
//         <View style={{ paddingTop: 50, paddingLeft: 20 }}> 
//           <Text style={{ color: 'black', fontSize: 27, fontWeight: '800' }}>Review Legal Documents</Text>  
//           <Text style={{ color: '#7A7A7A', fontSize: 15, fontWeight: '400', paddingTop: 10, paddingRight: 10 }}>
//             By consenting to the following InfoSenior Care can provide the best experience possible.
//             You can manage your privacy at any time in Settings. We collect data usage to improve our 
//             application and its impact. You can read more about how we collect, process, and use your 
//             data on our Privacy page.
//           </Text>
//         </View>

//         <GuidelineExpand main_heading="Community Guidelines" para_text={initialText} />
//         <GuidelineExpand main_heading="Service Agreement" para_text={initialText1} />
//         <GuidelineExpand main_heading="Business Association Agreement" para_text={initialText2} />

//         <View style={{ width: '80%', marginTop: 20, marginLeft: 40 }}>
//           <CustomButton title="Next" onPress={handleSubmit} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     backgroundColor: '#ffffff',
//     alignItems: 'left',
//     justifyContent: 'flex-start',
//   },
// });

// export default ManagePrivacy;
