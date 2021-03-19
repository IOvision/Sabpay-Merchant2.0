import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import InputText from '../components/atoms/InputText'
import { BodyText, HeaderText } from '../components/atoms/Text'
import colors from '../assets/colors'
import PurpleRoundBtn from '../components/atoms/PurpleRoundBtn'
import { signIn } from '../redux/actions/merchant'
import { connect } from 'react-redux';
import SmsRetriever from 'react-native-sms-retriever'
import { Auth } from 'aws-amplify'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getInventory, getInventoryMetadata, getUserData} from '../requests'
import Merchant from '../models/Merchant'
import { setInventory, setInventoryMetadata } from '../redux/actions/inventory'
import Inventory from '../models/Inventory'
import InventoryMetadata from '../models/InventoryMetadata'
import OtpInput from '../components/atoms/OtpInput'


export interface Props {
    navigation: any,
    setSignedIn: (merchant: Merchant) => void,
    setInventory: (inventory: Inventory) => void,
    setInventoryMetadata: (invMetadata: InventoryMetadata) => void,
}
const LoginTab: React.FC<Props> = ({navigation, setSignedIn, setInventory, setInventoryMetadata}) => {
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [state, setState] = useState("phone")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState('null')
    var temp: any


    const validateNumber = (number: string) => {
        return number.length == 10;
    }

    const signUp = async () => {
        if(validateNumber(phone)) {
            try {
                const { user } = await Auth.signUp({
                    username: `+91${phone}`,
                    password: Date.now().toString()
                })
                startSmsListener()
            } catch (error) {
                if (error.code === "UsernameExistsException")
                startSmsListener()
            }
            setState("otp")
        } else {
            setError(true)
        }
    }

    const startSmsListener = async () => {
        try {
            setIsLoading(true)
            signIn()
            const registered = await SmsRetriever.startSmsRetriever()
            if (registered) {
                SmsRetriever.addSmsListener(event => {
                    const a = /(\d{4})/g.exec(event.message)[1]
                    SmsRetriever.removeSmsListener()
                    confirmSignIn(a)
                })
            }
        } catch (error) {
            
        }  
    }

    const signIn = async () => {
        try {
            temp = await Auth.signIn(`+91${phone}`)
            setUser(temp)
        } catch (error) {
            console.log(error)
        }
    }

    const confirmSignIn = async (otp: string) => {
        try {
            const data = await Auth.sendCustomChallengeAnswer(user, otp);
            console.log(data.signInUserSession.idToken.jwtToken)
            getUserData(phone, data.signInUserSession.idToken.jwtToken, (err, resp) => {
                console.log("Data ->", err, resp)
                if (err) {
                    if(err === 'signup'){
                        navigation.navigate('InventoryCreate', { phone: phone, state: 0 })
                        return
                    }
                    else if (err === 'inventory') {
                        navigation.navigate('InventoryCreate', { phone: phone, state: 1 })
                        return
                    }
                }
                AsyncStorage.setItem('@Merchant', JSON.stringify(resp))
                Promise.all([getInventoryMetadata(resp.invId), getInventory(resp.invId.split("+")[1])])
                .then(merchant => {
                    setInventoryMetadata(merchant[0])
                    setInventory(merchant[1])
                    setSignedIn(resp)
                    navigation.replace("Main")
                })
            })
        } catch (error) {
            console.log('error', error)
        }
    }

    if(state == "phone") {
        return (
            <View style={styles.container}>
                <InputText value={phone} placeholder="" onChangeText={setPhone} preText={"+91"} style={{marginHorizontal: 40, marginTop: 100, marginBottom: 10}} editable={true} error={error ? "Invalid" : ""} keyboardType={"phone-pad"}/>
                <BodyText style={{color: colors.grey, marginHorizontal: 40}}>An Otp would be sent to verify your Mobile Number</BodyText>
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn onPress={signUp} text="Next" style={{paddingHorizontal: 100, marginBottom: 10}} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <BodyText style={{margin: 40, marginTop: 100}}>Enter Verification code you received</BodyText>
                <InputText value={otp} placeholder="0-9" onChangeText={setOtp} style={{marginHorizontal: 40}}/>
                <HeaderText style={{color: colors.primary, marginTop: 30, marginHorizontal: 40}}>Resend Otp?</HeaderText>
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn text="Log-In" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => {
                        SmsRetriever.removeSmsListener()
                        confirmSignIn(otp)
                    }}/>
                </View>
            </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedIn: (merchant: Merchant) => dispatch(signIn(merchant)),
        setInventory: (inventory: Inventory) => dispatch(setInventory(inventory)),
        setInventoryMetadata: (invMeta: InventoryMetadata) => (dispatch(setInventoryMetadata(invMeta)))
    }
}

export default connect(null, mapDispatchToProps)(LoginTab)

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white"
    }
})
