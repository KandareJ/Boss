import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import RadioButtons from './RadioButtons';
import Button from './Button';
import { add_program, new_profile } from '../../actions';
import { set_profile } from '../../Database/DietDatabase';

const Profile = ({ add_program, new_profile, navigation, profile, programs }) => {
  const [gender, setGender] = React.useState((profile.gender) ? profile.gender : "Male");
  const [exercise, setExercise] = React.useState((profile.activity_level) ? profile.activity_level : "Sedentary");
  const [goal, setGoal] = React.useState((profile.goal) ? profile.goal : "Maintain");
  const [height, setHeight] = React.useState((profile.height) ? profile.height + "" : "");
  const [weight, setWeight] = React.useState((profile.weight) ? profile.weight + "" : "");
  const [age, setAge] = React.useState((profile.age) ? profile.age + "" : "");

  const checkHeight = (val) => {
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (re.test(val) || val === "") setHeight(val);
  }

  const checkWeight = (val) => {
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (re.test(val) || val === "") setWeight(val);
  }

  const checkAge = (val) => {
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (re.test(val) || val === "") setAge(val);
  }

  const onPress = async () => {
    if (height && weight && age) {
      await set_profile(parseFloat(height), parseFloat(weight), parseInt(age), gender, goal, exercise);
      new_profile({
        height: parseFloat(height),
        weight: parseFloat(weight),
        age: parseInt(age),
        gender,
        activity_level: exercise,
        goal,
      });

      if (programs.indexOf('Diet') === -1) {
        add_program('Diet');
      }
      navigation.goBack();
    }
  }

  return (
    <View style={styles.bg}>
      <ScrollView>
        <View style={styles.scroll}>
          <View style={styles.inputSection}>
            <Text style={styles.label}>Height (inches):</Text>
            <TextInput style={styles.input} value={height} onChangeText={(val) => {checkHeight(val)}} placeholder='72' keyboardType='numeric'/>
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.label}>Weight (lbs):</Text>
            <TextInput style={styles.input} value={weight} onChangeText={(val) => {checkWeight(val)}} placeholder='175' keyboardType='numeric'/>
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.label}>Age (years):</Text>
            <TextInput style={styles.input} value={age} onChangeText={(val) => {checkAge(val)}} placeholder='30' keyboardType='numeric'/>
          </View>
          <View style={styles.radioSection}>
            <Text style={styles.label}>Gender:</Text>
            <RadioButtons options={['Male', 'Female']} selected={gender} select={setGender} />
          </View>
          <View style={styles.radioSection}>
            <Text style={styles.label}>Activity Level:</Text>
            <RadioButtons options={['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active']} selected={exercise} select={setExercise} />
          </View>
          <View style={styles.radioSection}>
            <Text style={styles.label}>Goal:</Text>
            <RadioButtons options={['Fat Loss', 'Maintain', 'Bulk']} selected={goal} select={setGoal} />
          </View>
          <Button title='Save' textStyle={styles.buttonText} style={styles.button} onPress={onPress} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
  },
  scroll: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10
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
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    marginHorizontal: 30,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500'
  }
});

const mapStateToProps = (state) => {
  return {
    profile: state.diet_profile,
    programs: state.programs
  };
}

export default connect(mapStateToProps, { add_program, new_profile })(Profile);
