import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import { Divider } from 'react-native-paper';
import CategoryPageCategoryListItem from '../atoms/CategoryPageCategoryListItem'
import {categoryNameFormat} from '../../models/utils'

export interface Props {
    data: {
        title: string,
        tags: string[]
    }[],
    style: StyleProp<ViewStyle>,
    navigation: any
}

const CategoryPageCategoryList: React.FC<Props> = ({data, style, navigation}) => {
    return (
        <View style={style}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return <CategoryPageCategoryListItem index={index} 
                    image={`https://raw.githubusercontent.com/IOvision/assets/master/images/categories/${item.title}.PNG`} 
                    title={categoryNameFormat(item.title)} 
                    onPress={() => navigation.push("ChooseTag", {
                        data: item
                    })}/>;
                }}
                ItemSeparatorComponent={() => <Divider style={{marginVertical: 5}}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryPageCategoryList
