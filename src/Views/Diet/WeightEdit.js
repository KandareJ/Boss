import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Button from './Button';

const WeightEdit = ({weight}) => {
  const [editing, setEditing] = React.useState(false);

  return (
    <View>
      {editing && editingMode(weight, setEditing)}
      {!editing && viewingMode(weight, setEditing)}
    </View>
  );
};

export default WeightEdit;

const editingMode = (weight, setEditing) => {
  return (
    <View style={styles.row}>
      <Text>Weight:</Text>
      <TextInput style={{ height: 25, minWidth: 35, borderColor: 'gray', borderWidth: 1 }} />
      <Button title='Save' onPress={() => {setEditing(false)}}/>
    </View>
  );
}

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
  }
});
