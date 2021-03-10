import React, {useState} from 'react'
import { View, FlatList } from 'react-native'
import Order from '../models/Order'
import AllOrdersFlatListItem from '../components/atoms/AllOrdersFlatListItem'

export interface Props {
    navigation: any
}

const OrderHistoryTab: React.FC<Props> = ({navigation}) => {
    const [orders, setOrders] = useState(Order.createArray)
    return (
        <FlatList 
            data={orders}
            renderItem={({item, index}) => <AllOrdersFlatListItem navigation={navigation} item={item}/>}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default OrderHistoryTab