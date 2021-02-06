import React, {useState} from 'react'
import SignUpTabPhone from '../components/molecules/SignUpTabPhone'
import SignUpTabOtp from '../components/molecules/SignUpTabOtp'
import SignUpTabInfo from '../components/molecules/SignUpTabInfo'
import SignUpTabPic from '../components/molecules/SignUpTabPic'
import SignUpTabMore from '../components/molecules/SignUpTabMore'

export interface Props {
    navigation: any
}
const SignUpTab: React.FC<Props> = ({navigation}) => {
    const [state, setState] = useState("phone")
    if(state == "phone") {
        return (
            <SignUpTabPhone navigation={navigation} setState={setState}/>
        )
    }
    if(state == "otp") {
        return (
            <SignUpTabOtp navigation={navigation} setState={setState} />
        )
    }
    if(state == "info") {
        return (
            <SignUpTabInfo navigation={navigation} setState={setState}/>
        )
    }
    if(state == "more") {
        return (
            <SignUpTabMore navigation={navigation} setState={setState}/>
        )
    }
}

export default SignUpTab
