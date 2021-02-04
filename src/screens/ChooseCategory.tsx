import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import CategoryPageCategoryList from '../components/molecules/CategoryPageCategoryList'
import Merchant from '../models/Merchant'
export interface Props {
    navigation: any,
    merchant: Merchant
}
const CategoriesTab: React.FC<Props> = ({navigation, merchant}) => {
    const [tags, setTags] = useState<string[]>(["Dairy", "Grocery"])
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <TouchableOpacity onPress={() => navigation.push('CategoryList')}
                activeOpacity={0.9}>
            </TouchableOpacity>
            <CategoryPageCategoryList 
                data={tags}
                style={{margin: 10, marginTop: 20, marginBottom: 0, flex: 1}}
                navigation={navigation}
            />
        </View>
    )
}

export default CategoriesTab