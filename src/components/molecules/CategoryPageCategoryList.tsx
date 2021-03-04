import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import { Divider } from 'react-native-paper';
import CategoryPageCategoryListItem from '../atoms/CategoryPageCategoryListItem'

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
                    image={"https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"} 
                    title={item.title} 
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
