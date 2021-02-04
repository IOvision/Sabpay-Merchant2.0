import React from 'react'
import StackHeader from '../components/atoms/StackHeader'
import Header from '../components/atoms/Header'

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

import RootDrawer from './RootDrawer'
import OrderDetailTab from '../screens/OrderDetailTab'
import ItemDetailScreen from '../screens/ItemDetailScreen'
import ChooseCategory from '../screens/ChooseCategory'
import ChooseTag from '../screens/ChooseTag'
import SignUpTab from '../screens/SignUpTab'
import LoginTab from '../screens/LoginTab'

const MainStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"LoginTab"}
        screenOptions={{
          header: ({ scene, previous, navigation}) => {
              return (
                  <Header navigation={navigation}  />
              )
          }
      }}>
        <Stack.Screen name="Main" component={RootDrawer} />
        <Stack.Screen
          name="LoginTab"
          component={LoginTab}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
                <StackHeader text="Log-In" navigation={navigation} />
              )
            }
          }}
        />
        <Stack.Screen
          name="SignUpTab"
          component={SignUpTab}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
                <StackHeader text="SignUp" navigation={navigation} />
              )
            }
          }}
        />
        <Stack.Screen
          name="OrderDetailTab"
          component={OrderDetailTab}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
                <StackHeader text="Order Detail" navigation={navigation} />
              )
            }
          }}
        />
        <Stack.Screen
          name="ItemDetailTab"
          component={ItemDetailScreen}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
                <StackHeader text="Item Detail" navigation={navigation} />
              )
            }
          }}
        />
        <Stack.Screen
          name="ChooseCategory"
          component={ChooseCategory}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
              <StackHeader text="Choose Category" navigation={navigation} />              )
            }
          }}
        />
        <Stack.Screen
          name="ChooseTag"
          component={ChooseTag}
          options={{
            header: ({ scene, previous, navigation}) => {
              return (
                <StackHeader text="Choose Tag" navigation={navigation} />
              )
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack
