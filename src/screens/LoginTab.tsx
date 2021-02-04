import React, {useState} from 'react'
import { View,StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import InputText from '../components/atoms/InputText'
import {BodyText, HeaderText} from '../components/atoms/Text'
import colors from '../assets/colors'
import PurpleRoundBtn from '../components/atoms/PurpleRoundBtn'

export interface Props {
    navigation: any
}
const LoginTab: React.FC<Props> = ({navigation}) => {
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [state, setState] = useState("phone")
    if(state == "phone") {
        return (
            <View style={styles.container}>
                <InputText value={phone} placeholder="" onChangeText={setPhone} preText={"+91"} style={{marginHorizontal: 40, marginTop: 100, marginBottom: 10}}/>
                <BodyText style={{color: colors.grey, marginHorizontal: 40}}>An Otp would be sent to verify your Mobile Number</BodyText>
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn text="Next" style={{paddingHorizontal: 100, marginBottom: 10}} onPress={() => setState("otp")}/>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.push("SignUpTab")}>
                        <BodyText>Don't Have an Account? <HeaderText style={{color: colors.primary}}>Sign Up</HeaderText></BodyText>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <BodyText style={{margin: 40, marginTop: 100}}>Enter Otp you received</BodyText>
                <InputText value={otp} placeholder="0-9" onChangeText={setOtp} style={{marginHorizontal: 40}}/>
                <HeaderText style={{color: colors.primary, marginTop: 30, marginHorizontal: 40}}>Resend Otp?</HeaderText>
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn text="Log-In" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => navigation.replace("Main")}/>
                    <TouchableOpacity activeOpacity={0.9}>
                        <BodyText style={{fontSize: 14}}>By Logging into your account you agree with our <BodyText style={{color: colors.primary}}>Terms&Conditions</BodyText> and <BodyText style={{color: colors.primary}}>Privacy Policy</BodyText></BodyText>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default LoginTab

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white"
    }
})
