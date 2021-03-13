import React from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer'
import colors from '../../assets/colors'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/merchant'
import { RootState } from '../../redux/store'
import Auth from '@aws-amplify/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Props {
    setSignedOut: () => void,
    isSignedIn: boolean,
    navigation: any
}

const CustomDrawerContent: React.FC<Props> = (props) => {
    const signOut = () => {
        AsyncStorage.removeItem('@Merchant')
        .then(res => {
            props.setSignedOut();
            Auth.signOut()
            props.navigation.replace('LoginTab')
        })
    }
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} inactiveTintColor={colors.white} activeTintColor={colors.white} />
            {
                props.isSignedIn ? (
                    <DrawerItem
                        activeTintColor={colors.white}
                        inactiveTintColor={colors.white}
                        label="Log Out"
                        onPress={signOut}
                    />
                ) : null
            }
        </DrawerContentScrollView>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        isSignedIn: state.merchantReducer.signedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)
