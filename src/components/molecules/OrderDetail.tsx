import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BodyText } from '../atoms/Text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import InfoBox from '../atoms/InfoBox'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function OrderDetail() {
    return (
        <View style={{paddingTop: 20, padding: 25, marginBottom: 70, borderTopWidth: 1, borderColor: colors.mediumGrey}}>
            <View style={styles.row}>
                <Icon name="account" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText>Santiago D'Souza</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText>711-2880 Nulla St. Mankato Mississippi 96522(257) 563-7401</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText style={{width: 200}}>9876543219</BodyText>
            </View>
            <View style={{...styles.row, justifyContent: "space-between"}}>
                <View style={styles.row}>
                    <FontAwesome5 name="rupee-sign" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                    <BodyText style={{width: 200}}>Rs. 600</BodyText>
                </View>
                <View><InfoBox text="COD" style={{paddingHorizontal: 20}}/></View>
            </View>
            </View>
    )
}


const styles = StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
      marginVertical: 10,
    }
  })