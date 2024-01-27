import React from 'react';
import { Provider } from 'react-redux';
import store from './src/configs/store';
import AppNavigator from './src/navigations/AppNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;