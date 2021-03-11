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
    console.log('keys :', {PK: invMetadata.SK, SK: SK, status: status})
    try {
      const statusUpdate = await API.graphql(graphqlOperation(updateOrderStatus, {PK: invMetadata.SK, SK: SK, status: status}))
      setStatus(status)
    } catch(err) {
      console.log(err)
    }
  }

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
             status == "PLACED" ? (
                <View style={{display: "flex", flexDirection: "row",height: 50, alignItems: "center"}}>
                  <View style={{height: 50, width: '50%', backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => updateOrder("ACCEPTED")}>
                      <HeaderText style={{color: 'white'}}>Accept</HeaderText>
                    </TouchableOpacity>
                  </View>
                  <View style={{height: 50, width: '50%', backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => updateOrder("DECLINED")}>
                      <HeaderText style={{color: 'white'}}>Decline</HeaderText>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                null
              )
            }
            {
              status == "ACCEPTED" ? (
                <View style={{display: "flex", flexDirection: "row",height: 50, alignItems: "center"}}>
                  <View style={{height: 50, width: '50%', backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center'}}>
                      <HeaderText style={{color: colors.green}}>Accepted</HeaderText>
                  </View>
                  <View style={{height: 50, width: '50%', backgroundColor: getColorAccordingToStatus("DELIVERED"), alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => updateOrder("DELIVERED")}>
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
                  <View style={{height: 50, width: '100%', backgroundColor: getColorAccordingToStatus("COMPLETE"), alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity onPress={() => updateOrder("COMPLETED")}>
                        <HeaderText style={{color: colors.white}}>Complete</HeaderText>
                      </TouchableOpacity> 
                  </View>
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