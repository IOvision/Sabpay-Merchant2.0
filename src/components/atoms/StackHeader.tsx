import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import { CaptionText } from '../../components/atoms/Text'

export interface Props {
    navigation: any, 
    text: String
}

const StackHeader: React.FC<Props> = ({navigation, text}) => {
    return (
        <View style={{display: "flex", flexDirection: "row", backgroundColor: "white", padding: 10}}>
            <Icon name="chevron-left" color={colors.grey} size={40} onPress={() => navigation.pop()}/>
            <View style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "center", marginStart: -40}}>
                <CaptionText style={{alignSelf: "center"}}>{text}</CaptionText>
            </View>
        </View>
    )
}
export default StackHeader
