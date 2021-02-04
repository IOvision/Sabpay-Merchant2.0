import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import {HeaderText} from '../atoms/Text'

export interface Props {
    image: string, 
    title: string
}

const ChooseTagItem: React.FC<Props> = ({image, title}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <HeaderText>{title}</HeaderText>
        </View>
    )
}
export default ChooseTagItem

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        marginEnd: 10
    }
})