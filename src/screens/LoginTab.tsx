import React, {useState} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import InputText from '../components/atoms/InputText'
import { BodyText, HeaderText } from '../components/atoms/Text'
import colors from '../assets/colors'
import { signIn } from '../redux/actions/merchant'
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getInventory, getInventoryMetadata, getUserData} from '../requests'
import Merchant from '../models/Merchant'
import { setInventory, setInventoryMetadata } from '../redux/actions/inventory'
import Inventory from '../models/Inventory'
import InventoryMetadata from '../models/InventoryMetadata'
import OtpInput from '../components/atoms/OtpInput'
import ButtonWIthActivityIndicator from '../components/atoms/ButtonWIthActivityIndicator'
import TimedButton from '../components/atoms/TimedButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {updateToken} from '../requests'


export interface Props {
    navigation: any,
    setSignedIn: (merchant: Merchant) => void,
    setInventory: (inventory: Inventory) => void,
    setInventoryMetadata: (invMetadata: InventoryMetadata) => void,
}
const LoginTab: React.FC<Props> = ({navigation, setSignedIn, setInventory, setInventoryMetadata}) => {
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [state, setState] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState('null')
    var temp: any

    const validateNumber = (number: string) => {
        return number.length == 10;
    }

    const signUp = async () => {
        if(validateNumber(phone)) {
            setIsLoading(true)
            try {
                const { user } = await Auth.signUp({
                    username: `+91${phone}`,
                    password: Date.now().toString()
                })
                signIn()
            } catch (error) {
                if (error.code === "UsernameExistsException")
                signIn()
            }
        } else {
            setError(true)
        }
    }

    // const startSmsListener = async () => {
    //     try {
    //         signIn()
    //         const registered = await SmsRetriever.startSmsRetriever()
    //         if (registered) {
    //             SmsRetriever.addSmsListener(event => {
    //                 const a = /(\d{4})/g.exec(event.message)[1]
    //                 SmsRetriever.removeSmsListener()
    //                 confirmSignIn(a)
    //             })
    //         }
    //     } catch (error) {
            
    //     }  
    // }

    const signIn = async () => {
        try {
            temp = await Auth.signIn(`+91${phone}`)
            setState(1)
            setIsLoading(false)
            setUser(temp)
        } catch (error) {
            console.log(error)
        }
    }

    const confirmSignIn = async (otp: string) => {
        try {
            setIsLoading(true)
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
                    updateToken(phone, (err, resp) => {
                        if (err) return console.log("Error", err)
                        console.log(resp)
                    })
                    navigation.replace("Main")
                })
            })
        } catch (error) {
            setIsLoading(false)
        }
    }

    if(state == 0) {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require("../assets/logo.png")} style={{width: 200, height: 100, alignSelf: 'center', marginTop: 20}} />
                    <BodyText 
                        style={{
                            color: colors.darkgrey, 
                            marginHorizontal: 40,
                            marginTop: 80
                    }}>
                        Enter your mobile number
                    </BodyText>
                    <InputText 
                        value={phone} 
                        placeholder="" 
                        onChangeText={setPhone} 
                        preText={"+91"} 
                        style={{marginHorizontal: 40, marginBottom: 10}} 
                        editable={true} error={error ? "Invalid" : ""} 
                        keyboardType={"phone-pad"}
                    />
                </View>
                <ButtonWIthActivityIndicator text="Next" isLoading={isLoading} onPress={signUp} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={{width: "100%", height: 60, flexDirection: "row", alignItems: "center", paddingHorizontal: 18}}>
                    <Icon name="arrow-left" color={colors.primary} size={25} onPress={() => setState(0)}/>
                    <View style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "center", marginStart: -40}}>
                        <HeaderText style={{alignSelf: "center", color: colors.primary, fontSize: 20}}>Code Verification</HeaderText>
                    </View>
                </View>
                <View style={{padding: 40}}>
                    <BodyText style={{maxWidth: 400}}>Enter the verification code you received</BodyText>
                    <OtpInput length={4} style={{marginVertical: 20}} setOtp={setOtp} otp={otp} />
                    <TimedButton onPress={signIn}/>
                </View>
            </View>
            <ButtonWIthActivityIndicator text="Login" isLoading={isLoading} onPress={() => {
                if (otp.length < 4)
                    alert("Enter Verification Code")
                confirmSignIn(otp)
            }} />
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
        backgroundColor: "white",
        justifyContent: "space-between"
    }
})
