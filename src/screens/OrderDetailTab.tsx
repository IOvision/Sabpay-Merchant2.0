import React, { useState } from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { HeaderText } from '../components/atoms/Text'
import OrderDetail from '../components/molecules/OrderDetail'
import colors from '../assets/colors'
import Order from '../models/Order'
import ItemFlatListItem from '../components/atoms/ItemFlatListItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OrderTotal from '../components/molecules/OrderTotal'
import API, { graphqlOperation } from '@aws-amplify/api'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import InventoryMetadata from '../models/InventoryMetadata'
import { updateOrderStatus } from '../../graphql/mutations'
import { getColorAccordingToStatus } from '../assets/randomColor'
import { OrderStatus } from '../models/OrderStatus'

export interface Props {
  invMetadata: InventoryMetadata,
  navigation: any,
  route: {
    params: {
      item: Order,
      newOrder: Boolean 
    }
  }
}
const OrderDetailTab: React.FC<Props> = ({navigation, route, invMetadata}) => {
  const [status, setStatus] = useState<String>(route.params.item.status)
  const updateOrder = async (status: string) => {
    const SK = route.params.item.id
    try {
      if (status == OrderStatus.DECLINED || status == OrderStatus.COMPLETED) {
        await API.graphql(graphqlOperation(updateOrderStatus, {PK: invMetadata.SK, SK: SK, status: status, active: 0}))
      } else {
        await API.graphql(graphqlOperation(updateOrderStatus, {PK: invMetadata.SK, SK: SK, status: status, active: 1}))
      }
      setStatus(status)
    } catch(err) {
      console.log(err)
    }
  }
  console.log(route.params.item.status)
  return (
        <View style={{display: "flex", flex: 1, backgroundColor: "white"}}>
          <FlatList
            data={route.params.item.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
            return <ItemFlatListItem  
                item={item} />;
            }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <OrderDetail item={route.params.item}/>}
            ListFooterComponent={() => <OrderTotal item={route.params.item} />}
          />
          <View style={{borderStyle: "solid", borderTopWidth: 1, borderTopColor: colors.mediumGrey}}>
            {
             status == OrderStatus.PLACED ? (
                <View style={{display: "flex", flexDirection: "row",height: 50, alignItems: "center"}}>
                  <View style={{height: 50, width: '50%', backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => updateOrder(OrderStatus.ACCEPTED)}>
                      <HeaderText style={{color: 'white'}}>Accept</HeaderText>
                    </TouchableOpacity>
                  </View>
                  <View style={{height: 50, width: '50%', backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => updateOrder(OrderStatus.DECLINED)}>
                      <HeaderText style={{color: 'white'}}>Decline</HeaderText>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                null
              )
            }
            {
              status == OrderStatus.ACCEPTED ? (
                <View style={{display: "flex", flexDirection: "row",height: 50, alignItems: "center"}}>
                  <View style={{height: 50, width: '50%', backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center'}}>
                      <HeaderText style={{color: colors.green}}>Accepted</HeaderText>
                  </View>
                  <View style={{height: 50, width: '50%', backgroundColor: getColorAccordingToStatus(OrderStatus.DELIVERED), alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => updateOrder(OrderStatus.DELIVERED)}>
                      <HeaderText style={{color: 'white'}}>Delivered</HeaderText>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                null
              )
            }
            {
              status == "DELIVERED" ? (
                <View style={{display: "flex", flexDirection: "row",height: 50, alignItems: "center"}}>
                  <View style={{height: 50, width: '100%', backgroundColor: "black", alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity onPress={() => updateOrder(OrderStatus.COMPLETED)}>
                        <HeaderText style={{color: colors.white}}>Complete</HeaderText>
                      </TouchableOpacity> 
                  </View>
                </View>
              ) : (
                null
              )
            }
            {
              status == OrderStatus.DECLINED ? (
                <View style={{display: "flex", flexDirection: "row",height: 50, justifyContent: "center", alignItems: "center"}}>
                  <HeaderText>Order has been declined</HeaderText>
                </View>
              ) : (
                null
              )
            }
          </View>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
  return {
    invMetadata : state.inventoryReducer.inventoryMetadata
  }
}

export default connect(mapStateToProps)(OrderDetailTab)