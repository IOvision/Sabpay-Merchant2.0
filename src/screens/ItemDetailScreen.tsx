import React, { useState } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../assets/colors'
import RoundView from '../components/atoms/RoundView'
import { CaptionText, HeaderText } from '../components/atoms/Text'
import stylesOut from '../styles/BorderedStyle'
import Item from '../models/Item'
import InfoBox from '../components/atoms/InfoBox'

export interface Props {
    route: any,
}

const ItemDetailScreen: React.FC<Props> = ({route}) => {

    const data: Item = route.params.item
    const [selected, setSelected] = useState<number>(route.params.selected)
    
    const children = () => {
        return data.child.map((element) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setSelected(element.key)}
                    style={{marginHorizontal: 5}}
                >
                    <InfoBox text={element.name} />
                    <RoundView style={element.key === selected ? [styles.childContainer, styles.childSelected] : styles.childContainer}>
                        <HeaderText style={element.key === selected ? styles.childSelected : {color: colors.mediumGrey}}>
                            {element.name}
                        </HeaderText>
                    </RoundView>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{padding: 20}}>
                <View style={stylesOut.container}>
                    <Image resizeMode="contain" source={{uri: data.image}} style={{width: '100%', height: 200}} />
                </View>
                <CaptionText style={{marginVertical: 5}}>{data.name}</CaptionText>
                <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'flex-end'}}>
                    <CaptionText>Rs. {data.child[selected].onDiscount ? data.child[selected].discountPrice : data.child[selected].price}</CaptionText>
                    { 
                        data.child[selected].onDiscount ? (
                            <CaptionText style={{textDecorationLine: 'line-through', marginLeft: 20, fontSize: 16}}> Rs. {data.child[selected].price} </CaptionText>
                        ) : (
                            null
                        )
                    }
                </View>
                { 
                    data.child[selected].onDiscount ? (
                        <HeaderText style={{color: '#007E0D'}}>Save Rs. {(data.child[selected].price-data.child[selected].discountPrice)}</HeaderText>
                    ) : (
                        null
                    )
                }
                <CaptionText style={{marginVertical: 5}}>Select Size</CaptionText>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    {children()}
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: colors.grey, marginVertical: 10}} />
                <CaptionText>About the product</CaptionText>
                <Text style={{marginBottom: 50}}>
                    {data.desc}
                </Text>
            </ScrollView>
        </View>
    )
}

export default ItemDetailScreen

const styles = StyleSheet.create({
    childContainer: {
        borderWidth: 1, 
        backgroundColor: 'white', 
        elevation: 2, 
        padding: 15,
        borderColor: colors.mediumGrey
    },
    childSelected: {
        borderColor: colors.primary,
        color: colors.primary
    }
})