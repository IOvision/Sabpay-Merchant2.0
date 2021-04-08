import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';
import HeaderStyle from '../../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { DrawerActions } from '@react-navigation/native'

export interface Props {
  marginTop: number,
  back: Boolean,
  color: string,
  navigation: any
}

const Header: React.FC<Props> = ({marginTop, navigation, back, color}) => {
  const DATA = {
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
  }
  
  return (
    <View style={[HeaderStyle.container]}>
      <Icon name="menu" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      <View style={{display: "flex", flexDirection: "row"}}>
        {/* <Icon style={{marginHorizontal: 30}} name="bell" color={Colors.primary} size={24} onPress={() => navigation.push("OrderDetailTab",{
          item: DATA, newOrder: true
        })} /> */}
        <Icon name="plus-circle-outline" color={Colors.primary} size={24} onPress={() => navigation.push("ChooseCategory")} />
      </View>
    </View>
  );
};

export default Header