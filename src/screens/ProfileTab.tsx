import React from 'react'
import { View } from 'react-native'
import WalletDetails from '../components/molecules/WalletDetails'
import ProfilePageOrdersFlatList from '../components/molecules/ProfilePageOrdersFlatList'
import { CaptionText } from '../components/atoms/Text'
import colors from '../assets/colors'

export default function ProfileTab({navigation}) {
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <WalletDetails />
            <View style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                <CaptionText style={{marginTop: 50, marginLeft: 30}}>Order Status</CaptionText>
                <CaptionText style={{marginTop: 50, marginRight: 30, color: colors.primary}}>See All</CaptionText>
            </View>
            <ProfilePageOrdersFlatList navigation={navigation}/>
        </View>
    )
}
