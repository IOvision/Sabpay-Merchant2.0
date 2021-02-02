import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BodyText } from '../atoms/Text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import InfoBox from '../atoms/InfoBox'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Order from '../../models/Order'
import Item from '../../models/Item'

export interface Props {
    item: Order
}
const OrderDetail: React.FC<Props> = ({item}) => {
    return (
        <View style={{paddingTop: 20, padding: 25, marginBottom: 70, borderTopWidth: 1, borderColor: colors.mediumGrey}}>
            <View style={styles.row}>
                <Icon name="account" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText>{item.user.name}</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText>{item.user.address}</BodyText>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                <BodyText style={{width: 200}}>{item.user.phone}</BodyText>
            </View>
            <View style={{...styles.row, justifyContent: "space-between"}}>
                <View style={styles.row}>
                    <FontAwesome5 name="rupee-sign" color={colors.primary} size={24} style={{marginEnd: 10}}/>
                    <BodyText style={{width: 200}}>Rs. {item.total}</BodyText>
                </View>
                <View><InfoBox text={item.deliveryType} style={{paddingHorizontal: 20}}/></View>
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

export default OrderDetail