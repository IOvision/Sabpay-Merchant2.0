import React from 'react'
import { FlatList } from 'react-native'
import ProfilePageOrdersItem from '../atoms/ProfilePageOrdersItem'

export default function ProfilePageOrdersFlatList({navigation}) {
    const DATA = [2,3,4]
    return (
        <FlatList
            data={DATA}
            horizontal={true}
            renderItem={() => <ProfilePageOrdersItem navigation={navigation} />}
            keyExtractor={item => item.toString()}
        />
    )
}
