import React from 'react'
import { View, TextInput, Text, StyleProp, ViewStyle } from 'react-native'
import InputStyle from '../../styles/InputStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export interface Props {
    placeholder: string,
    value?: string,
    backgroundStyle?: StyleProp<ViewStyle>,
    onChangeText?: Function,
    error?: string,
    preText?: string,
    style?: StyleProp<ViewStyle>,
    editable?: boolean,
    keyboardType?: string
}

const InputText: React.FC<Props> = ({placeholder, value, backgroundStyle, onChangeText, style, error, preText, editable, keyboardType}) => {
    return (
        <View style={
            error ? 
            [InputStyle.background, InputStyle.error, backgroundStyle, style]
            :
            [InputStyle.background, backgroundStyle, style]
        }>
            <View style={{flexShrink: 1, flex: 1, flexDirection: 'row'}}>
                <Text style={{ ...InputStyle.text, alignSelf: 'center', paddingRight: 0}}>{preText}</Text>
                <TextInput 
                    style={value == "" || typeof value == 'undefined' ? InputStyle.placeholder : InputStyle.text } 
                    value={value}
                    placeholder={placeholder}
                    onChangeText={(text) => onChangeText(text)}
                    editable={editable}
                    keyboardType={keyboardType ? keyboardType : "default"}
                />
            </View>
            <View style={{alignSelf: 'center'}}>
            {
                error ? (
                    <Icon name="alert-circle-outline" size={24} color="red" />
                ) : (
                    null
                )
            }
            </View>
         </View>
    )
}

export default InputText