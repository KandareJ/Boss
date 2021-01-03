import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Programs from './Views/Programs';

const App = () => {
  return (
    <NavigationContainer>
      <Programs />
    </NavigationContainer>
  );
};

export default App;
