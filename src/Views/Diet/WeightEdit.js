import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import { new_profile } from '../../actions';

const WeightEdit = ({weight, new_profile, profile}) => {
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(weight);

  const editingMode = () => {
    const validate = (value, setValue) => {
      const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
      if (re.test(value) || value === "") setValue(value);
    };

    return (
      <View style={styles.row}>
        <Text>Weight:</Text>
        <TextInput style={styles.input} value={text} onChangeText={(value) => {validate(value, setText)}} keyboardType='numeric'/>
        <Button title='Save' onPress={() => {
          if (text) {
            new_profile({
              height: profile.height,
              weight: parseFloat(text),
              age: profile.age,
              gender: profile.gender,
              activity_level: profile.activity_level,
              goal: profile.goal,
            });
          }
          setEditing(false);
        }}/>
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
    <TouchableOpacity onPress={() => {setEditing(true)}}>
      <Text>Weight: {weight}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
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
