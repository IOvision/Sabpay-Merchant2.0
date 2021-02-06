import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BodyText } from './Text'
import colors from '../../assets/colors'

export default function InfoBox({text, style, children}) {
    return (
        <View style={[styles.container, style]}>
            {children}
            <BodyText>{text}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5, 
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.mediumGrey,
        borderRadius: 5
    }
})
