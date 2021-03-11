import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../assets/colors'
import Order from '../../models/Order'
import { CaptionText, HeaderText } from '../atoms/Text'

export interface Props {
    item: Order
}

const OrderTotal: React.FC<Props> = ({item}) => {
    return (
        <View style={{
            borderWidth: 1, 
            borderColor: colors.grey, 
            marginHorizontal: 10, 
            marginVertical: 20, 
            padding: 10,
            borderRadius: 5
        }}>
            <HeaderText style={{marginBottom: 5}}>Price Details</HeaderText>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                borderTopWidth: 1, 
                borderColor: colors.grey, 
                padding: 5
            }}>
                <CaptionText style={{fontSize: 16}}>Price</CaptionText>
                <CaptionText style={{fontSize: 16}}>Rs. {item.total}</CaptionText>
            </View>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                borderBottomWidth: 1, 
                borderColor: colors.grey,
                padding: 5
            }}>
                <CaptionText style={{fontSize: 16}}>Discount</CaptionText>
                <CaptionText style={{fontSize: 16}}>Rs. {item.discount}</CaptionText>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                <HeaderText>Total</HeaderText>
                <HeaderText>Rs. {parseInt(item.total) - parseInt(item.discount)}</HeaderText>
            </View>
        </View>
    )
}

export default OrderTotal
