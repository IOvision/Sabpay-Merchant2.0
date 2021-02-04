import React from 'react';
import {View, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { CaptionText } from '../atoms/Text'
import { CategoryPageCategoryItemStyles } from '../../styles/FlatListItemStyle'
import randomColor, { colorLength } from '../../assets/randomColor';

export interface Props {
    image: string,
    title: string,
    onPress: (event: GestureResponderEvent) => void
    index: number
}

const CategoryPageCategoryListItem: React.FC<Props> = ({image, title, onPress, index}) => {
    return (
        <View style={{ ...CategoryPageCategoryItemStyles.container, backgroundColor: randomColor[index % colorLength]}}>
            <TouchableOpacity activeOpacity={0.9} style={CategoryPageCategoryItemStyles.container} onPress={onPress}>
                <Image source={{uri: image}} style={CategoryPageCategoryItemStyles.image} />
                <View style={CategoryPageCategoryItemStyles.textContainer}>
                    <CaptionText style={CategoryPageCategoryItemStyles.text}>{title}</CaptionText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryPageCategoryListItem