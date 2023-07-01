/**
 * @format
 */

import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

import {AppRegistry} from 'react-native';
const AppRedux = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppRedux);
export default AppRedux;
