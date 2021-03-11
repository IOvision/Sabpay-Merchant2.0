import React from 'react';
import {View, Image } from 'react-native';
import { BodyText, CaptionText, HeaderText } from '../atoms/Text'
import InfoBox from '../atoms/InfoBox'
import CartItem from '../../models/CartItem'
import colors from '../../assets/colors';
import { Divider } from 'react-native-paper';

export interface Props {
    item: CartItem,
}

const ItemFlatListItem: React.FC<Props> = ({item}) => {
    return (
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Image style={{
                    width: 80, 
                    height: 80, 
                    borderWidth: 1, 
                    borderColor: colors.grey, 
                    backgroundColor: colors.grey,
                    }} 
                    source={{uri: item.image}} 
                />
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{justifyContent:'space-between', padding: 5, paddingHorizontal: 20}}>
                        <HeaderText>{item.name}</HeaderText>
                        <CaptionText>
                            {item.variant}
                        </CaptionText>
                    </View>
                    <View style={{height: '100%', width: 1, marginHorizontal: 5, backgroundColor: colors.grey, marginVertical: 5}} />
                    <View style={{marginStart: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <CaptionText>{`Qty: ${item.quantity}`}</CaptionText>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemFlatListItem