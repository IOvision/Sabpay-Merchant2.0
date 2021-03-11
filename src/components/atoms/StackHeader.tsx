import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import { CaptionText, HeaderText } from '../../components/atoms/Text'

export interface Props {
    navigation: any, 
    text: String
}

const StackHeader: React.FC<Props> = ({navigation, text}) => {
    return (
        <View style={{display: "flex", flexDirection: "row", backgroundColor: "white", padding: 10, alignItems: 'center'}}>
            <Icon name="arrow-left" color={colors.primary} size={25} onPress={() => navigation.pop()}/>
            <View style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "center", marginStart: -40}}>
                <HeaderText style={{alignSelf: "center", color: colors.primary, fontSize: 20}}>{text}</HeaderText>
            </View>
        </View>
    )
}
export default StackHeader
