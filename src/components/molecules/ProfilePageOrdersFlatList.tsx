import React from 'react'
import { FlatList } from 'react-native'
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
            data={data}
            horizontal={true}
            renderItem={({item, index}) => <ProfilePageOrdersItem navigation={navigation} item={item}/>}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => {
                 setLastKey(btoa(JSON.stringify(data[data.length-1].toJSON())))
            }}
        />
    )
}
export default ProfilePageOrdersFlatList