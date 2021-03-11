import React from 'react'
import { FlatList, View } from 'react-native'
import ProfilePageOrdersItem from '../atoms/ProfilePageOrdersItem'
import Order from '../../models/Order'

export interface Props {
    navigation: any, 
    data: Order[],
    setLastKey: any
}
const ProfilePageOrdersFlatList: React.FC<Props> = ({navigation, data, setLastKey}) => {
    return (
        <FlatList
            style={{marginHorizontal: 10}}
            data={data}
            horizontal={true}
            renderItem={({item, index}) => <ProfilePageOrdersItem navigation={navigation} item={item}/>}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{marginHorizontal: 5}} />}
        />
    )
}
export default ProfilePageOrdersFlatList