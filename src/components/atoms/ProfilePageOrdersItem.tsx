import React from 'react'
import { View, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import RoundView from '../atoms/RoundView'
import { BodyText } from '../atoms/Text'
import colors from '../../assets/colors'

export default function ProfilePageOrdersItem({navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("OrderDetailTab")} activeOpacity={0.9}>
        <RoundView style={{marginTop: 20, marginLeft: 25, marginBottom: 70}}>
            <View style={styles.row}>
                <Icon name="account" color={Colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText>Santiago D'Souza</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color={Colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText>9876543210</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker" color={Colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText style={{width: 160}}>711-2880 Nulla St. Mankato Mississippi 96522(257) 563-7401</BodyText>
            </View>
            <View style={{backgroundColor: colors.mediumGrey, height: 1, marginHorizontal: -20, marginVertical: 20}} />
            <BodyText style={{color: colors.primary, textAlign: "center"}}>Out For Delivery</BodyText>
        </RoundView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        margin: 10, 
    }
})
