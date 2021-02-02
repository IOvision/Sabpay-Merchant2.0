import React from 'react';
import {View, Image } from 'react-native';
import { OrdersItemStyles } from '../../styles/FlatListItemStyle'
import { BodyText, HeaderText } from '../atoms/Text'
import InfoBox from '../atoms/InfoBox'
import CartItem from '../../models/CartItem'

export interface Props {
    image: string,
    item: CartItem,
}

const ItemFlatListItem: React.FC<Props> = ({image, item}) => {
    return (
        <View style={{ ...OrdersItemStyles.container}}>
            <Image style={OrdersItemStyles.image} source={{uri: image}} />
            <View style={{margin: 10, flex: 1, paddingEnd: 50}}>
                <HeaderText>{item.name}</HeaderText>
                <View style={{...OrdersItemStyles.row}}>
                    <InfoBox text={item.variant}/>
                    <View style={{...OrdersItemStyles.row, alignItems: "center"}}>
                        <BodyText>Quantity: </BodyText>
                        <InfoBox text={item.quantity} style={{paddingVertical: 1}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemFlatListItem