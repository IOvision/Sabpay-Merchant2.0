import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CaptionText, HeaderText } from '../atoms/Text'
import colors from '../../assets/colors'
import Order from '../../models/Order'
import { Divider } from 'react-native-paper'

export interface Props {
    item: Order
}
const OrderDetail: React.FC<Props> = ({item}) => {
    return (
        <View style={{padding: 10}}>
            <View style={{borderWidth: 1, borderColor: colors.grey, padding: 5, borderRadius: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <CaptionText style={{fontSize: 16, color: colors.grey}}>{item.id}</CaptionText>
                </View>
                <Divider style={{marginVertical: 5}} />
                <View>
                    <CaptionText style={{fontSize: 16}}>Ordered By:</CaptionText>
                    <HeaderText style={{fontSize: 18}}>{item.user.name}</HeaderText>
                    <HeaderText style={{fontSize: 14}}>{item.user.address}</HeaderText>
                    <HeaderText style={{fontSize: 14}}>+91 {item.user.phone}</HeaderText>
                </View>
            </View>
            <CaptionText style={{marginTop: 10, fontSize: 18}}>Ordered Items:</CaptionText>
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