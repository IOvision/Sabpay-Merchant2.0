import React from 'react'
import { View } from 'react-native'
import ItemFlatList from '../components/molecules/ItemFlatList'
import { HeaderText } from '../components/atoms/Text'
import OrderDetail from '../components/molecules/OrderDetail'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../assets/colors'

export default function OrderDetailTab({navigation}) {
    const DATA= [
        {
          "image": "https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_toned_milk.JPG",
          "name": "Amul Toned Milk",
          "PK": "TAG#Milk_and_Milk_Products",
          "price": 22,
          "quantity": 1,
          "SK": "ID-1608228816004",
          "variant": "500ml",
          "variantKey": 0
        },
        {
          "image": "https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_toned_milk.JPG",
          "name": "Amul Toned Milk",
          "PK": "TAG#Milk_and_Milk_Products",
          "price": 22,
          "quantity": 1,
          "SK": "ID-1608228816004",
          "variant": "500ml",
          "variantKey": 0
        },
        {
          "image": "https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_toned_milk.JPG",
          "name": "Amul Toned Milk",
          "PK": "TAG#Milk_and_Milk_Products",
          "price": 22,
          "quantity": 1,
          "SK": "ID-1608228816004",
          "variant": "500ml",
          "variantKey": 0
        },
        {
          "image": "https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_toned_milk.JPG",
          "name": "Amul Toned Milk",
          "PK": "TAG#Milk_and_Milk_Products",
          "price": 22,
          "quantity": 1,
          "SK": "ID-1608228816004",
          "variant": "500ml",
          "variantKey": 0
        }
      ]
    return (
        <View style={{display: "flex", flex: 1, backgroundColor: "white"}}>
            <ScrollView>
              <OrderDetail />
              <ItemFlatList navigation={navigation} data={DATA} style={{}}/>
            </ScrollView>
            <View style={{borderStyle: "solid", borderTopWidth: 1, borderTopColor: colors.mediumGrey}}>
              <HeaderText style={{color: colors.green, alignSelf: "center", padding: 10}}>Delivered</HeaderText>
            </View>
        </View>
    )
}
