import React from 'react';
import {View, Image, TouchableOpacity, GestureResponderEvent, ImageBackground } from 'react-native';
import { HeaderText } from '../atoms/Text'
import { CategoryPageCategoryItemStyles } from '../../styles/FlatListItemStyle'
import randomColor, { colorLength } from '../../assets/randomColor';
import colors from '../../assets/colors';

export interface Props {
    image: string,
    title: string,
    onPress: (event: GestureResponderEvent) => void
    index: number
}

const CategoryPageCategoryListItem: React.FC<Props> = ({image, title, onPress, index}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{height: 200, borderWidth: 1, borderColor: colors.grey}}>
                <Image source={{uri: image}} style={{flex: 1}}/>
                <View style={{position: 'absolute', width: "100%", bottom: 0, backgroundColor: 'white', alignItems: 'center', padding: 5, borderTopStartRadius: 5, borderTopEndRadius: 5}}>
                    <HeaderText style={{fontSize: 18}}>{title}</HeaderText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryPageCategoryListItem