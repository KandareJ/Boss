import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import { add_water } from '../../actions';

const AddWater = ({add_water, navigation}) => {
  const [amount, setAmount] = React.useState("");

  const validate = (value, setValue) => {
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (re.test(value) || value === "") setValue(value);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Amount (oz):</Text>
        <TextInput style={styles.input} value={amount} onChangeText={(value) => {validate(value, setAmount)}} placeholder='8' />
      </View>
      <Button title='Done' onPress={() => {
        if (amount) {
          add_water(parseFloat(amount));
          navigation.goBack();
        }
      }} />
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
  }
});

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, { add_water })(AddWater);
