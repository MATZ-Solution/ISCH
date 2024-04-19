import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const GuidelineExpand = ({ text, showFullText, limitWords, toggleText }) => {
  return (
    <View style={{ marginTop: 20, height: 150, width: '90%', backgroundColor: 'grey', marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        <Text style={{ color: '#000000', textAlign: 'left', fontSize: 15, paddingLeft: 5, paddingRight: 5 }}>
          {showFullText ? text : limitWords(text, 30)}
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={toggleText}>
        <Text style={{ color: '#ffffff', marginTop: 10 }}>
          {showFullText ? 'Show Less' : 'Show More'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuidelineExpand;
