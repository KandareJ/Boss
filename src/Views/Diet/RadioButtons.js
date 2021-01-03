import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const RadioButtons = ({options, selected, select}) => {
  return (
    <View>
      {options.map((x) => {
        return (<Button key={x} title={x} selected={x === selected} select={select} />);
      })}
    </View>
  );
}

const Button = ({title, selected, select}) => {
  return(
    <TouchableWithoutFeedback onPress={() => {select(title)}}>
      <View style={styles.buttonContainer}>
        <View style={styles.radioButton}>
          {selected && <View style={styles.innerRadio}/> }
        </View>
        <View style={{ marginHorizontal: 10}}><Text style={styles.radioText}>{title}</Text></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RadioButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 10,
    alignItems: 'center'
  },
  radioText: {
    fontSize: 20
  },
  radioButton: {
    backgroundColor: 'rgba(255,255,255,0)',
    borderColor: 'rgb(70,100,140)',
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerRadio: {
    backgroundColor: 'rgb(70,100,140)',
    width: 12,
    height: 12,
    borderRadius: 6
  },
});
