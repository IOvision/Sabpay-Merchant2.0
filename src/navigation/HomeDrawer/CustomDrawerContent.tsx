import React from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer'
import colors from '../../assets/colors'

export interface Props {

}

const CustomDrawerContent: React.FC<Props> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} inactiveTintColor={colors.white} activeTintColor={colors.white} />
            {/* {
                props.isSignedIn ? (
                    <DrawerItem
                        activeTintColor={colors.primary}
                        inactiveTintColor={colors.darkgrey}
                        label="Log Out"
                        onPress={signOut}
                    />
                ) : null
            } */}
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
