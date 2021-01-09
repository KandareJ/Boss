import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { set_items } from '../../actions';
import Button from './Button';
import { get_day, set_day } from '../../Database/DietDatabase';
import { getDate } from '../../logic/date';

const EditItem = ({navigation, set_items, route }) => {
  const { item, index } = route.params;
  const [name, setName] = React.useState(item.name);
  const [fat, setFat] = React.useState(item.fat);
  const [protein, setProtein] = React.useState(item.protein);
  const [carbs, setCarbs] = React.useState(item.carbs);
  const [servings, setServings] = React.useState(item.servings);

  const validate = (value, setValue) => {
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (re.test(value) || value === "") setValue(value);
  };

  const onPress = async () => {
    if (name && fat && protein && carbs && servings) {
      let item = {
        name,
        fat,
        carbs,
        protein,
        servings
      };

      let day = await get_day(getDate());
      day.items[index] = item;
      await set_day(getDate(), day);

      set_items(day.items);
      navigation.goBack();
    }
  };

  const deleteOnPress = async () => {
    if (name && fat && protein && carbs && servings) {
      let item = {
        name,
        fat,
        carbs,
        protein,
        servings
      };

      let day = await get_day(getDate());
      day.items.splice(index, 1);
      await set_day(getDate(), day);

      set_items(day.items);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.bg}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={(value) => {setName(value)}} placeholder='Apple' />
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Fat (grams):</Text>
        <TextInput style={styles.input} value={fat} onChangeText={(value) => {validate(value, setFat)}} placeholder='0.2' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Carbs (grams):</Text>
        <TextInput style={styles.input} value={carbs} onChangeText={(value) => {validate(value, setCarbs)}} placeholder='13.8' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Protein (grams):</Text>
        <TextInput style={styles.input} value={protein} onChangeText={(value) => {validate(value, setProtein)}} placeholder='0.3' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Servings:</Text>
        <TextInput style={styles.input} value={servings} onChangeText={(value) => {validate(value, setServings)}} placeholder='1' keyboardType='numeric'/>
      </View>
      <View style={styles.buttons}>
        <Button title='Delete' textStyle={styles.buttonText} style={styles.deleteButton} onPress={deleteOnPress} />
        <Button title='Save' textStyle={styles.buttonText} style={styles.button} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10
  },
  input: {
    fontSize: 20,
    flex: 1
  },
  inputSection: {
    flexDirection: 'row',
    marginBottom: 20
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    alignItems: 'center',
    width: 100
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500'
  },
  deleteButton: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ad4d4d',
    width: 100
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  }
});

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, { set_items })(EditItem);
