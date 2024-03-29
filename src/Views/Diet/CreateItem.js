import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { add_item } from '../../actions';
import Button from './Button';
import { get_day, set_day } from '../../Database/DietDatabase';
import { getDate } from '../../logic/date';

const CreateItem = ({navigation, add_item}) => {
  const [name, setName] = React.useState("");
  const [fat, setFat] = React.useState("");
  const [protein, setProtein] = React.useState("");
  const [carbs, setCarbs] = React.useState("");
  const [servings, setServings] = React.useState("");

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
      day.items.push(item);
      await set_day(getDate(), day);

      add_item(item);
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
      <Button title='Done' textStyle={styles.buttonText} style={styles.button} onPress={onPress} />
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
  };
}

export default connect(mapStateToProps, { add_item })(CreateItem);
