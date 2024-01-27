import React from 'react';
import { Provider } from 'react-redux';
import store from './src/configs/store';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;