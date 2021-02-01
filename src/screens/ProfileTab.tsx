import React from 'react'
import { View, Text } from 'react-native'
import WalletDetails from '../components/molecules/WalletDetails'
import ProfilePageOrdersFlatList from '../components/molecules/ProfilePageOrdersFlatList'

export default function ProfileTab() {
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <WalletDetails />
            <ProfilePageOrdersFlatList />
        </View>
    )
}
