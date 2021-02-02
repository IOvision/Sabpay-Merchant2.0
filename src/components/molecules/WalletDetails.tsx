import React from 'react'
import {View} from 'react-native'
import RoundView from '../atoms/RoundView'
import { BodyText, HeaderText, CaptionText } from '../atoms/Text'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'

export default function WalletDetails() {
    return (
        <RoundView style={{margin: 20, marginTop: 30}}>
            <BodyText>Wallet Balance</BodyText>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <CaptionText style={{fontSize: 26}}>Rs. 7000</CaptionText>
                <PurpleRoundBtn text="Withdraw"/>
            </View>
        </RoundView>
    )
}
