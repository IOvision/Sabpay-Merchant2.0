import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/atoms/Header'

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

import HelpTab from '../screens/HelpTab'
import RootDrawer from './RootDrawer'

const MainStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ scene, previous, navigation}) => {
              return (
                  <Header navigation={navigation}  />
              )
          }
      }}>
        <Stack.Screen name="Main" component={RootDrawer} />
        <Stack.Screen
          name="HelpTab"
          component={HelpTab}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
                <Header back={() => navigation.pop()} navigation={navigation} />
              )
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack
