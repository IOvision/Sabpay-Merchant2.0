import React from 'react'
import { View, FlatList } from 'react-native'
import StoreItemItem from '../components/atoms/StoreItemItem'

export default function StoreTab({navigation}) {
  const DATA = [1,2,3,4,5,6,7,9]
  const data=[{
    "child": [
        {
          "key": "0",
          "name": "250ml",
          "price": "150"
        },
        {
          "key": "1",
          "name": "500ml",
          "price": "300"
        }
      ],
      "desc": "A Simple Ketchup",
      "GS1_SK": "CAT#grocery",
      "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
      "name": "Rich Tomato Ketchup",
      "PK": "TAG#test",
      "SK": "ID-1606989963056",
      "tag": "grocery"
    },
    {
      "child": [
        {
          "key": 0,
          "name": "500ml",
          "price": 27
        },
        {
          "key": 1,
          "name": "1L",
          "price": 53
        }
      ],
      "desc": "Tasty and Nutritious and Full Cream Amul Milk",
      "GS1_PK": "CAT#Dairy",
      "image": "https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_fullcream_milk.JPG",
      "name": "Amul Full Cream Milk",
      "PK": "TAG#Milk_and_Milk_Products",
      "SK": "ID-1608228885724"
    }
  ]
  return (
    <View style={{display: "flex", flex: 1, backgroundColor: "white"}}>
      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data={data}
        numColumns={2}
        renderItem={({ item }) => <StoreItemItem item={item} navigation={navigation}/>}
      />
    </View>
  )
}
