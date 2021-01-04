import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Programs from './Views/Programs';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Programs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
