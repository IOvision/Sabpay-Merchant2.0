import React from 'react'
import { View } from 'react-native'
import ItemFlatList from '../components/molecules/ItemFlatList'
import { HeaderText } from '../components/atoms/Text'
import OrderDetail from '../components/molecules/OrderDetail'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../assets/colors'
import Order from '../models/Order'
export interface Props {
  navigation: any, 
  route: {
    params: {
      item: Order   
    }
  }
}
const OrderDetailTab: React.FC<Props> = ({navigation, route}) => {
    return (
        <View style={{display: "flex", flex: 1, backgroundColor: "white"}}>
            <ScrollView>
              <OrderDetail item={route.params.item}/>
              <ItemFlatList navigation={navigation} data={route.params.item.items} style={{}}/>
            </ScrollView>
            <View style={{borderStyle: "solid", borderTopWidth: 1, borderTopColor: colors.mediumGrey}}>
              <HeaderText style={{color: colors.green, alignSelf: "center", padding: 15}}>{route.params.item.status}</HeaderText>
            </View>
        </View>
    )
}

export default OrderDetailTab