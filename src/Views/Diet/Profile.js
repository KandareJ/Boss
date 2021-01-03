import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import RadioButtons from './RadioButtons';
import Button from './Button';

const Profile = () => {
  const [gender, setGender] = React.useState("Male");
  const [exercise, setExercise] = React.useState("Sedentary");
  const [goal, setGoal] = React.useState("Maintain")

  return (
    <View style={styles.bg}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Height (inches):</Text>
        <TextInput style={styles.input} placeholder='72' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Weight (lbs):</Text>
        <TextInput style={styles.input} placeholder='175' keyboardType='numeric'/>
      </View>
      <View style={styles.radioSection}>
        <Text style={styles.label}>Gender:</Text>
        <RadioButtons options={['Male', 'Female']} selected={gender} select={setGender} />
      </View>
      <View style={styles.radioSection}>
        <Text style={styles.label}>Exercise:</Text>
        <RadioButtons options={['Sedentary', 'Female']} selected={exercise} select={setExercise} />
      </View>
      <View style={styles.radioSection}>
        <Text style={styles.label}>Goal:</Text>
        <RadioButtons options={['Fat Loss', 'Maintain', 'Bulk']} selected={goal} select={setGoal} />
      </View>
      <Button title='Save' />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 15
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
    marginBottom: 5
  },
  input: {
    fontSize: 20,
    flex: 1
  },
  inputSection: {
    flexDirection: 'row',
    marginBottom: 20
  },
  radioSection: {
    marginBottom: 20
  }
});
