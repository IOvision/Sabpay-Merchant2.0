/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-vector-icons'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'

const store = configureStore()
const SabPayMerchant = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => SabPayMerchant);
