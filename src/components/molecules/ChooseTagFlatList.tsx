import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import ChooseTagItem from '../atoms/ChooseTagItem';

export interface Props {
    data: any,
    style: StyleProp<ViewStyle>,
    navigation: any
}

const ChooseTagFlatList: React.FC<Props> = ({data, style, navigation}) => {
    return (
        <View style={style}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return ( 
                        <ChooseTagItem  
                            image={item.image} 
                            title={item.title} 
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ChooseTagFlatList
