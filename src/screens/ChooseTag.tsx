import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import PurpleRoundBtn from '../components/atoms/PurpleRoundBtn'
import ChooseTagFlatList from '../components/molecules/ChooseTagFlatList'
import Inventory from '../models/Inventory'
import Merchant from '../models/Merchant'
import { RootState } from '../redux/store'
import { updateTags } from '../requests'

export interface Props {
    navigation: any,
    route: any,
    inventory: Inventory,
    merchant: Merchant
}

const ChooseTag: React.FC<Props> = ({navigation, route, inventory, merchant}) => {
    const [data, setData] = useState<{
        title: string,
        tags: string[]
    }>(route.params.data)
    const [tagList, setTagList] = useState<string[]>(data.title in inventory.tags ? inventory.tags[data.title] : [])
    console.log(tagList)
    const handleChange = () => {
        updateTags(inventory, merchant.invId.split("+")[1], data.title, tagList)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <View style={{display: "flex", flex: 1, backgroundColor: "white", justifyContent: "space-between"}}>
            <ChooseTagFlatList tagList={tagList} setTagList={setTagList} data={data} navigation={navigation} style={{padding: 10}}/>
            <PurpleRoundBtn style={{width: '100%', borderRadius: 4, padding: 15, alignItems: 'center'}} text="Apply Changes" onPress={handleChange}/>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory,
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(ChooseTag)