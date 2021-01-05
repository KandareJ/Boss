import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import DietOverview from './Diet/DietOverview';
import Button from './Diet/Button';

const ProgramList = ({ navigation, programs }) => {
  return (
    <View style={styles.bg}>
      <ScrollView>
        <View style={styles.center}>
          {programs.map((x, i) => {
            if (x === 'Diet') {
              return (
                <TouchableOpacity key={i} onPress={() => navigation.navigate('Diet')}>
                  <DietOverview />
                </TouchableOpacity>
              );
            }
          })}
          {!programs.length &&<Button title='+' onPress={() => navigation.navigate('Profile')}/>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%'
  },
  center: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10
  }
});

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  };
}

export default connect(mapStateToProps)(ProgramList);
