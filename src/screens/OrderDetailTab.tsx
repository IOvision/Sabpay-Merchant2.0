import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import ItemFlatList from '../components/molecules/ItemFlatList'
import { HeaderText } from '../components/atoms/Text'
import OrderDetail from '../components/molecules/OrderDetail'
import colors from '../assets/colors'
import Order from '../models/Order'
import ItemFlatListItem from '../components/atoms/ItemFlatListItem'
export interface Props {
  navigation: any,
  route: {
    params: {
      item: Order,
      newOrder: Boolean 
    }
  }
}
const OrderDetailTab: React.FC<Props> = ({navigation, route}) => {
    return (
        <View style={{display: "flex", flex: 1, backgroundColor: "white"}}>
              <FlatList
                data={route.params.item.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return <ItemFlatListItem  
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStV5V5RgqgZ5sJJtjY49woXC7_v6bZ4ibmrQ&usqp=CAU"} 
                    item={item} />;
                }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => {return <OrderDetail item={route.params.item}/>}}
            />
            <View style={{borderStyle: "solid", borderTopWidth: 1, borderTopColor: colors.mediumGrey}}>
              {
                route.params.newOrder ? (
                  <View style={{display: "flex", flexDirection: "row",height: 50, alignItems: "center"}}>
                    <View style={{width: '50%', borderColor: colors.mediumGrey, borderWidth: 1, borderStyle: "solid"}}>
                    <HeaderText style={{color: colors.green, alignSelf: "center", padding: 15}}>Accept</HeaderText>
                    </View>
                    <View style={{width: '50%', borderColor: colors.mediumGrey, borderWidth: 1, borderStyle: "solid"}}>
                    <HeaderText style={{color: colors.danger, alignSelf: "center", padding: 15}}>Reject</HeaderText>
                    </View>
                  </View>
                ) : (
                  <HeaderText style={{color: colors.green, alignSelf: "center", padding: 15}}>{route.params.item.status}</HeaderText>
                )
              }
            </View>
        </View>
    )
}

export default OrderDetailTab