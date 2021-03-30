import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import colors from '../../assets/colors'
import { CaptionText } from './Text'

export interface Props {
    text: string,
    isLoading: boolean,
    onPress: () => void
}

const ButtonWIthActivityIndicator: React.FC<Props> = ({text, isLoading, onPress}) => {
    return (
        <TouchableOpacity style={{backgroundColor: colors.primary, margin: 10, padding: 10, borderRadius: 5}} onPress={onPress}>
            {
                isLoading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <View style={{alignItems: "center" }}>
                        <CaptionText style={{color: "white"}}>{text}</CaptionText>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

export default ButtonWIthActivityIndicator
