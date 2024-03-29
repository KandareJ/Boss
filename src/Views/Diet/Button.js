import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({title, onPress, textStyle, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.bg, ...style}}>
        <Text style={{...styles.text, ...textStyle}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#4dad9a',
    margin: 5,
    padding: 2,
    borderRadius: 3,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4,
  },
  text: {
    color: 'white',
    fontSize: 17
  }
});
