import React from 'react'
import { View,StyleSheet, Image, TouchableOpacity } from 'react-native'
import styles from '../../styles/BorderedStyle'
import {BodyText} from '../atoms/Text'
import Item from '../../models/Item'

export interface Props {
    item: Item,
    navigation: any
}

const StoreItemItem: React.FC<Props> = ({item, navigation}) => {
    console.log(Object.keys(item))
    return (
        <TouchableOpacity style={{...styles.container, margin: 2, width: '49%'}} onPress={() => navigation.push("ItemDetailTab", {
            item: item,
            selected: 0
        })} activeOpacity={0.9}>
            <Image style={stylesIn.image} source={{uri: item.image}} />
            <BodyText>{item.name}</BodyText>
            <BodyText>{item.child.length} variants</BodyText>
        </TouchableOpacity>
    )
}
const stylesIn = StyleSheet.create({
    image: {
        height: 150, 
        width: '100%'
    }
})

export default StoreItemItem
