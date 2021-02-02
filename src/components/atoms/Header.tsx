import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';
import HeaderStyle from '../../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { DrawerActions } from '@react-navigation/native'

export interface Props {
  marginTop: number,
  back: Boolean,
  title: string,
  color: string,
  navigation: any
}

const Header: React.FC<Props> = ({marginTop, navigation, back, title, color}) => {
  if (title) 
  return (
    <View style={{backgroundColor: color ? color : Colors.primary}}>
      <View style={{ ...HeaderStyle.container, justifyContent: 'flex-start'}}>
        {
            !back ? (
              <View style={{marginStart: 20}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
              </View>
            ) : (
              <View style={{marginStart: 20, alignSelf: 'center'}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} />
              </View>
            )
        }
        <Text style={{alignSelf: 'center', fontSize: 24, color: Colors.primary, marginStart: 18}}>{title}</Text>
      </View>
    </View>
  )
  
  return (
    <View style={[HeaderStyle.container]}>
      <Icon name="menu" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      <View style={{display: "flex", flexDirection: "row"}}>
        <Icon style={{marginHorizontal: 30}} name="bell" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
        <Icon name="plus-circle-outline" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      </View>
    </View>
  );
};

export default Header