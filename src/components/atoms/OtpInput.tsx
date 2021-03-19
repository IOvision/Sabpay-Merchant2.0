import React, { createRef, useState, MutableRefObject, RefObject, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const OtpInput = ({length}) => {

    const data = Array.from({length})
    const inputRefs: RefObject<TextInput>[] = data.map(() => createRef())

    const [pins, setPins] = useState([])

    useEffect(() => {
        inputRefs[0].current.focus()
    }, [])

    const handleChange = (pin: string, index: number) => {
        console.log(inputRefs.length, index)
        let item = [...pins]
        item[index] = pin
        setPins(item)
        if (index < inputRefs.length-1 && pin != "")
            inputRefs[index + 1].current.focus()
        else if (index > 0 && pin == "")
            inputRefs[index - 1].current.focus()
    }
 
    return (
        <View style={{flex: 0.6, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {
                data.map((item, index) => (
                    <TextInput
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
                            height: 55, 
                            width: "10%", 
                            borderRadius: 10, 
                            borderWidth: 0.5, 
                            borderColor: "grey",
                            textAlign: "center"
                        }}
                    />
                ))
            }
        </View>
    )
}

export default OtpInput

const styles = StyleSheet.create({})
