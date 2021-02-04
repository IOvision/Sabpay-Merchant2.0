import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import ItemFlatListItem from '../atoms/ItemFlatListItem'

export interface Props {
    data: any,
    style: StyleProp<ViewStyle>,
    navigation: any
}

const ItemFlatList: React.FC<Props> = ({data, style, navigation}) => {
    return (
        <View style={{marginTop: -90}}>
            
        </View>
    )
}

export default ItemFlatList
