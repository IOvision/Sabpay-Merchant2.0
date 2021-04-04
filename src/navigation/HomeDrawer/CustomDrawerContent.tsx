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
import {deleteToken} from '../../requests'
import Merchant from '../../models/Merchant'

export interface Props {
    setSignedOut: () => void,
    isSignedIn: boolean,
    navigation: any,
    merchant: Merchant
}

const CustomDrawerContent: React.FC<Props> = (props) => {
    const signOut = () => {
        AsyncStorage.removeItem('@Merchant')
        .then(async res => {
            props.setSignedOut();
            deleteToken(props.merchant.phone, (err, resp) => {
                if (err) return console.log("Error", err)
                console.log(resp)
            })
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
        isSignedIn: state.merchantReducer.signedIn,
        merchant: state.merchantReducer.merchant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)
