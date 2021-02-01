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
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={back} />
              </View>
            )
        }
        <Text style={{alignSelf: 'center', fontSize: 24, color: Colors.primary, marginStart: 18}}>{title}</Text>
      </View>
    </View>
  )
  
  return (
    <View>
      <View style={[HeaderStyle.container]}>
        {
            !back ? (
              <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
                <Icon style={HeaderStyle.start_icon} name="menu" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
              </View>
            ) : (
              <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={back} />
              </View>
            )
        }
        <View style={{flex: 1, justifyContent: 'center'}}>
          {/* <Image source={image} style={HeaderStyle.logo} /> */}
        </View>
        <View style={{flex: 1, justifyContent: 'center', marginRight: 20}} />
      </View>
    </View>
  );
};

export default Header