import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
  if (!text) return '';
  
  const words = text.split(' ');
  return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
};

const GuidelineExpand = ({ main_heading, para_text }) => {
  const [acceptedGuidelines, setAcceptedGuidelines] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [viewHeight, setViewHeight] = useState(105); // Initial height

  const toggleText = () => {
    setShowFullText(!showFullText);
    setViewHeight(showFullText ? 105 : 'auto');
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingLeft: 20, paddingRight: 20, justifyContent: "space-between" }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>{main_heading}</Text>
        <Checkbox value={acceptedGuidelines} onValueChange={setAcceptedGuidelines} />
      </View>
      <View style={{
        marginTop: 20, height: 150, width: '92%',
        height: viewHeight, backgroundColor: 'white', marginLeft: 18,
        justifyContent: 'center', alignItems: 'center', borderRadius: 10,
        borderColor: '#C7D0D8', borderWidth: 1,
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5
      }}>
        <ScrollView>
          <Text style={{ color: '#000000', textAlign: 'left', fontSize: 15, paddingLeft: 5, paddingRight: 5 }}>
            {showFullText ? para_text : limitWords(para_text, 30)}
          </Text>
        </ScrollView>
        <TouchableOpacity onPress={toggleText}>
          <Text style={{ color: '#0470BA', marginTop: 10, textAlign: 'left' }}>
            {showFullText ? 'Show Less' : 'Show More'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GuidelineExpand;
