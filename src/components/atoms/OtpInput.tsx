import React, { createRef, useState, RefObject, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, View, TextInput, ViewStyle } from 'react-native'
import colors from '../../assets/colors'

export interface Props {
    length: number,
    style?: ViewStyle,
    setOtp: Dispatch<SetStateAction<string>>,
    otp: string
}

const OtpInput: React.FC<Props> = ({length, style, setOtp, otp}) => {

    const data = Array.from({length})
    const inputRefs: RefObject<TextInput>[] = data.map(() => createRef())

    const [pins, setPins] = useState([])

    useEffect(() => {
        inputRefs[0].current.focus()
    }, [])

    const handleChange = (pin: string, index: number) => {
        let item = [...pins]
        item[index] = pin
        setPins(item)
        if (index < inputRefs.length-1 && pin != "")
            inputRefs[index + 1].current.focus()
        else if (index > 0 && pin == "")
            inputRefs[index - 1].current.focus()
    }
    
    useEffect(() => {
        if (pins.length == 4)
            setOtp(pins.join(""))
    }, [pins])

    return (
        <View style={[ {flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20}, style ]}>
            {
                data.map((item, index) => (
                    <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        maxLength={1}
                        placeholder={"-"}
                        onChangeText={(pin) => handleChange(pin, index)}
                        style={{ 
                            backgroundColor: '#f5f4f2',
                            fontWeight: "600", 
                            alignSelf: "center", 
                            padding: 10, 
                            fontSize: 20, 
                            height: 50, 
                            width: 40, 
                            borderRadius: 10, 
                            borderColor: colors.darkgrey,
                            textAlign: "center",
                            color: colors.primary
                        }}
                    />
                ))
            }
        </View>
    )
}

export default OtpInput

const styles = StyleSheet.create({})
