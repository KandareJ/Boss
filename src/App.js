import React from 'react';
import { View, StyleSheet } from 'react-native';

import Profile from './Views/Diet/Profile';

const App = () => {

  return (
      <View style={styles.bg}>
        <Profile />
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
