import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import ProfilePageOrdersFlatList from '../components/molecules/ProfilePageOrdersFlatList'
import { CaptionText } from '../components/atoms/Text'
import colors from '../assets/colors'
import {getInventory, getInventoryMetadata, getOrders} from '../requests'
import { RootState } from '../redux/store'
import { connect } from 'react-redux'
import Merchant from '../models/Merchant'
import Order from '../models/Order'
import Inventory from '../models/Inventory'
import { setInventory, setInventoryMetadata } from '../redux/actions/inventory'
import InventoryMetadata from '../models/InventoryMetadata'
import PurpleRoundBtn from '../components/atoms/PurpleRoundBtn'

export interface Props {
  navigation: any,
  merchant: Merchant,
  inventory: Inventory,
  setInventoryMetadata: (inv: InventoryMetadata) => void,
  setInventory: (inv: Inventory) => void
}

const ProfileTab: React.FC<Props> = ({navigation, merchant, inventory}) => {
  const [lastKey, setLastKey] = useState(null)
  const [data, setData] = useState<Order[]>([])
  useEffect(() => {
    if (typeof merchant.invId == "undefined") {
      navigation.navigate("InventoryCreate")
    }
  }, [merchant])

    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <View style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                <CaptionText style={{marginTop: 50, marginLeft: 30}}>Order Status</CaptionText>
                <CaptionText style={{marginTop: 50, marginRight: 30, color: colors.primary}}>See All</CaptionText>
            </View>
            <ProfilePageOrdersFlatList navigation={navigation} data={data} setLastKey={setLastKey} />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
  return {
    merchant: state.merchantReducer.merchant,
    inventory: state.inventoryReducer.inventory
  }
}

export default connect(mapStateToProps)(ProfileTab)