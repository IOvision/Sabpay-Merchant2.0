import React from 'react'
import { View } from 'react-native'
import WalletDetails from '../components/molecules/WalletDetails'
import ProfilePageOrdersFlatList from '../components/molecules/ProfilePageOrdersFlatList'
import { CaptionText } from '../components/atoms/Text'
import colors from '../assets/colors'

export default function ProfileTab({navigation}) {
    const DATA = [{
        "deliveryType": "Pick-Up",
        "discount": "0",
        "GS1_PK": "USR#9650625937",
        "items": [
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
        ],
        "LS1_SK": 1,
        "merchant": {
          "address": "Earth",
          "name": "Meri dukan"
        },
        "PK": "26f9a27d613fac56ae3cea7b0490884e",
        "SK": "ORD#2021010713543527084552191",
        "status": "RECEIVED",
        "total": "22",
        "user": {
          "address": "pkt 18 sector 24 rohini",
          "name": "Sakshi Jain",
          "phone": "+919650625937"
        }
      },{
        "deliveryType": "Express",
        "discount": "0",
        "GS1_PK": "USR#9650625937",
        "items": [
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
            "image": "https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_fullcream_milk.JPG",
            "name": "Amul Full Cream Milk",
            "PK": "TAG#Milk_and_Milk_Products",
            "price": 27,
            "quantity": 1,
            "SK": "ID-1608228885724",
            "variant": "500ml",
            "variantKey": 0
          }
        ],
        "LS1_SK": 1,
        "merchant": {
          "address": "Earth",
          "name": "Meri dukan"
        },
        "PK": "26f9a27d613fac56ae3cea7b0490884e",
        "SK": "ORD#2021011315066827084552191",
        "status": "RECEIVED",
        "total": "49",
        "user": {
          "address": "254-255 pkt 18 sector 24 rohini",
          "name": "Sakshi Jain",
          "phone": "+919650625937"
        }
      }]
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <WalletDetails />
            <View style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                <CaptionText style={{marginTop: 50, marginLeft: 30}}>Order Status</CaptionText>
                <CaptionText style={{marginTop: 50, marginRight: 30, color: colors.primary}}>See All</CaptionText>
            </View>
            <ProfilePageOrdersFlatList navigation={navigation} data={DATA}/>
        </View>
    )
}
