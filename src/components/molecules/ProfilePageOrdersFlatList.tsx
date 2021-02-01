import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePageOrdersItem from '../atoms/ProfilePageOrdersItem'

export default function ProfilePageOrdersFlatList() {
    const DATA = [2,3,4]
    return (
        <FlatList
            data={DATA}
            horizontal={true}
            renderItem={() => <ProfilePageOrdersItem />}
            keyExtractor={item => item.toString()}
        />
    )
}
