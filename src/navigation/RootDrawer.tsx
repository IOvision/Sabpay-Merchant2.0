import React from 'react'
import CustomDrawerContent from '../navigation/HomeDrawer/CustomDrawerContent'
import LinearGradient from 'react-native-linear-gradient'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();

import ProfileTab from '../screens/ProfileTab'
import StoreTab from '../screens/StoreTab'
import HelpTab from '../screens/HelpTab'
 
const RootDrawer: React.FC = () => {
    return (
        <Drawer.Navigator
        drawerStyle={{
            width: 240,
        }}
        drawerContent={(props) => 
            (
                <LinearGradient 
                    style={{backgroundColor: "red", width: '100%', height: '100%', padding: 10, display: "flex", alignSelf: 'baseline'}} 
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                    colors={['#8021EB', '#04035C']}>
                    <CustomDrawerContent {...props} />
                </LinearGradient>
            )
        }>
            <Drawer.Screen name="My Profile" component={ProfileTab} />
            {/* <Drawer.Screen name="My Store" component={StoreTab} /> */}
            <Drawer.Screen name="Help and Support" component={HelpTab} />
        </Drawer.Navigator>
    )
}

export default RootDrawer
