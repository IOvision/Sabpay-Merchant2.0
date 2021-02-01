import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

export interface Props {
    style?: StyleProp<ViewStyle>
}

const RoundView: React.FC<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
})

export default RoundView
