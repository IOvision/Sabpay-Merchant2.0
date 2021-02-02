import React from 'react'
import { FlatList } from 'react-native'
import ProfilePageOrdersItem from '../atoms/ProfilePageOrdersItem'
import Order from '../../models/Order'

export interface Props {
    navigation: any, 
    data: Order[]
}
const ProfilePageOrdersFlatList: React.FC<Props> = ({navigation, data}) => {
    return (
        <FlatList
            data={data}
            horizontal={true}
            renderItem={({item, index}) => <ProfilePageOrdersItem navigation={navigation} item={item}/>}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}
export default ProfilePageOrdersFlatList