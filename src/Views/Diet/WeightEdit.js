import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import { new_profile } from '../../actions';
import { get_day, set_day, set_profile } from '../../Database/DietDatabase';
import { getDate } from '../../logic/date';

const WeightEdit = ({weight, new_profile, profile}) => {
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(weight);

  const editingMode = () => {
    const validate = (value, setValue) => {
      const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
      if (re.test(value) || value === "") setValue(value);
    };

    const onPress = async () => {
      if (text) {
        new_profile({
          height: profile.height,
          weight: parseFloat(text),
          age: profile.age,
          gender: profile.gender,
          activity_level: profile.activity_level,
          goal: profile.goal,
        });
        await set_profile(profile.height, parseFloat(text), profile.age, profile.gender, profile.goal, profile.activity_level);
        let day = await get_day(getDate());
        day.weight = parseFloat(text);
        await set_day(getDate(), day);
      }
      setEditing(false);
    };

    return (
      <View style={styles.row}>
        <Text>Weight:</Text>
        <TextInput style={styles.input} value={text} onChangeText={(value) => {validate(value, setText)}} keyboardType='numeric'/>
        <Button title='Save' onPress={onPress}/>
      </View>
    );
  }

  return (
    <View>
      {editing && editingMode()}
      {!editing && viewingMode(weight, setEditing)}
    </View>
  );
};


const viewingMode = (weight, setEditing) => {
  return (
    <View style={styles.row}>
    <TouchableOpacity onPress={() => {setEditing(true)}}>
      <Text>Weight: {weight}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35
  },
  input: {
    height: 25,
    minWidth: 35,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const mapStateToProps = (state) => {
  return {
    profile: state.diet_profile
  };
}

export default connect(mapStateToProps, { new_profile })(WeightEdit);
