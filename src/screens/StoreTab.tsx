import React from 'react'
import { View, FlatList } from 'react-native'
import StoreItemItem from '../components/atoms/StoreItemItem'

export default function StoreTab() {
  const DATA = [1,2,3,4,5,6,7,9]
  return (
    <View style={{display: "flex", flex: 1, backgroundColor: "white"}}>
      <FlatList 
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <StoreItemItem />}
      />
    </View>
  )
}
