import React from 'react'
import { View, Text } from 'react-native'
import Root from './src/navigation/Root'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Amplify, { Auth } from 'aws-amplify'
import awsConfig from './aws-exports'
import AmplifyStorage from './src/models/AmplifyStorage'

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

export default function App() {
  return (
      <Root />
  )
}
