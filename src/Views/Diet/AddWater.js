import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import { add_water } from '../../actions';
import { get_day, set_day } from '../../Database/DietDatabase';
import { getDate } from '../../logic/date';

const AddWater = ({add_water, navigation}) => {
  const [amount, setAmount] = React.useState("");

  const validate = (value, setValue) => {
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (re.test(value) || value === "") setValue(value);
  };

  const onPress = async () => {
    if (amount) {
      let day = await get_day(getDate());
      day.water += parseFloat(amount);
      await set_day(getDate(), day);
      add_water(parseFloat(amount));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.bg}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Amount (oz):</Text>
        <TextInput style={styles.input} value={amount} onChangeText={(value) => {validate(value, setAmount)}} placeholder='8' keyboardType='numeric'/>
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

export default connect(mapStateToProps, { add_water })(AddWater);
