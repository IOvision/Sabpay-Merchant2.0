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
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return <ItemFlatListItem  
                    image={"https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_butter.JPG"} 
                    item={item} />;
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ItemFlatList
