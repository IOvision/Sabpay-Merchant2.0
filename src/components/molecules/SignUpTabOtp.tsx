import React, {useState} from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import InputText from '../atoms/InputText'
import {BodyText, HeaderText} from '../atoms/Text'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'

export interface Props {
    navigation: any, setState: Function
}
const SignUpTabOtp: React.FC<Props> = ({navigation, setState}) => {
    const [otp, setOtp] = useState("")
    return (
        <View style={styles.container}>
            <BodyText style={{marginTop: 100}}>Enter Otp you received</BodyText>
            <InputText value={otp} placeholder="0-9" onChangeText={setOtp}/>
            <HeaderText style={{color: colors.primary, marginTop: 30}}>Resend Otp?</HeaderText>
            <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                <PurpleRoundBtn text="Next" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => setState("info")}/>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.push("LoginTab")}>
                    <BodyText>Already Have an Account? <HeaderText style={{color: colors.primary}}>Log-In</HeaderText></BodyText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpTabOtp

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})
