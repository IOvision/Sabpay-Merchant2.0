import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import ProfilePageOrdersFlatList from '../components/molecules/ProfilePageOrdersFlatList'
import { CaptionText } from '../components/atoms/Text'
import colors from '../assets/colors'
import {getActiveOrders} from '../requests'
import { RootState } from '../redux/store'
import { connect } from 'react-redux'
import Merchant from '../models/Merchant'
import Order from '../models/Order'
import Inventory from '../models/Inventory'
import InventoryMetadata from '../models/InventoryMetadata'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateOrder } from '../../graphql/subscriptions'
import { useIsFocused } from '@react-navigation/core'

export interface Props {
  navigation: any,
  merchant: Merchant,
  invMetadata: InventoryMetadata
  setInventoryMetadata: (inv: InventoryMetadata) => void,
  setInventory: (inv: Inventory) => void
}

const ProfileTab: React.FC<Props> = ({navigation, merchant, invMetadata}) => {
  const [lastKey, setLastKey] = useState(null)
  const [data, setData] = useState<Order[]>([])
  const isFocused = useIsFocused()
  useEffect(() => {
    getActiveOrders(invMetadata.SK)
    .then(res => {
      console.log(res)
      setData(res)
    })
    .catch(err => console.log(err))
    const orderSub = API.graphql(
      graphqlOperation(onCreateOrder, { PK: invMetadata.SK })
    ).subscribe({
      next: ({ provider, value }) => {
        var a = Order.fullDetails(value.data.onCreateOrder)
        setData([ a, ...data ])
      },
      error: error => console.warn(error)
    })
    return () => {
      orderSub.unsubscribe();
    }
  }, [isFocused])

    return (
        <View style={{backgroundColor: colors.primary, flex: 1}}>
            <View style={{display: "flex", flexDirection:"row", alignItems: 'flex-end', justifyContent: "space-between", backgroundColor: 'white', padding: 20}}>
                <CaptionText style={{color: colors.primary}}>My Orders</CaptionText>
            </View>
            <ProfilePageOrdersFlatList navigation={navigation} data={data} setLastKey={setLastKey} />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
  return {
    merchant: state.merchantReducer.merchant,
    invMetadata: state.inventoryReducer.inventoryMetadata
  }
}

export default connect(mapStateToProps)(ProfileTab)