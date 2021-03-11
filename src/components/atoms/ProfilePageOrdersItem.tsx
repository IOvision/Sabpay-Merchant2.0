import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import RoundView from '../atoms/RoundView'
import { BodyText } from '../atoms/Text'
import colors from '../../assets/colors'
import Order from '../../models/Order'
import { getColorAccordingToStatus } from '../../assets/randomColor'
export interface Props {
    navigation: any, 
    item: Order
}

const {height} = Dimensions.get('window')
const ProfilePageOrdersItem: React.FC<Props> = ({navigation, item}) => {
        return (
        <TouchableOpacity onPress={() => navigation.push("OrderDetailTab", {item: item, newOrder: false})} activeOpacity={0.9}>
        <RoundView style={{marginTop: 20, height: height/1.5, padding: 0}}>
            <View style={{height: 20, backgroundColor: getColorAccordingToStatus(item.status), borderTopStartRadius: 10, borderTopEndRadius: 10}} />
            <View style={{padding: 15}}>
                <View style={styles.row}>
                    <Icon name="account" color={Colors.primary} size={24} style={{marginEnd: 10}}/>
                    <BodyText>{item.user.name}</BodyText>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color={Colors.primary} size={24} style={{marginEnd: 10}}/>
                    <BodyText>{item.user.phone}</BodyText>
                </View>
                <View style={styles.row}>
                    <Icon name="map-marker" color={Colors.primary} size={24} style={{marginEnd: 10}}/>
                    <BodyText style={{width: 160}}>{item.user.address}</BodyText>
                </View>
            </View>
            <View style={{display: "flex", justifyContent: "flex-end", flex: 1}}>
                <View style={{height: 50, padding: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderColor: colors.grey}}>
                    <BodyText style={{color: colors.primary, textAlign: "center", justifyContent: "flex-end"}}>Out For Delivery</BodyText>
                </View>
            </View>
        </RoundView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        margin: 10, 
    }
})


export default ProfilePageOrdersItem