import React from 'react'
import { View, Text } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();

import ProfileTab from '../screens/ProfileTab'
import StoreTab from '../screens/StoreTab'
 
const RootDrawer: React.FC = () => {
    return (
        <Drawer.Navigator
        drawerStyle={{
            width: 240,
        }}>
            <Drawer.Screen name="ProfileTab" component={ProfileTab} />
            <Drawer.Screen name="StoreTab" component={StoreTab} />
        </Drawer.Navigator>
    )
}

export default RootDrawer
