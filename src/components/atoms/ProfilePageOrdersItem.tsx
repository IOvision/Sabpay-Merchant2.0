import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import RoundView from '../atoms/RoundView'
import { BodyText } from '../atoms/Text'
import colors from '../../assets/colors'

export default function ProfilePageOrdersItem() {
    return (
        <RoundView style={{margin: 20, marginTop: 100}}>
            <View style={styles.row}>
                <Icon name="account" color={Colors.primary} size={24} />
                <BodyText>Santiago D'Souza</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="account" color={Colors.primary} size={24} />
                <BodyText>9876543210</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="account" color={Colors.primary} size={24} />
                <BodyText style={{width: 200}}>711-2880 Nulla St. Mankato Mississippi 96522(257) 563-7401</BodyText>
            </View>
            <View style={{backgroundColor: colors.mediumGrey, height: 1, marginHorizontal: -20, marginVertical: 20}} />
            <BodyText style={{color: colors.primary, textAlign: "center"}}>Out For Delivery</BodyText>
        </RoundView>
    )
}

const styles = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        margin: 10, 
    }
})
