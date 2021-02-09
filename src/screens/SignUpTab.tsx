import React, {useState} from 'react'
import SignUpTabName from '../components/molecules/SignUpTabName'
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
            <SignUpTabName navigation={navigation} setState={setState}/>
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
