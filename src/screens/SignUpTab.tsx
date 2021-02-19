import React, {useState} from 'react'
import SignUpTabName from '../components/molecules/SignUpTabName'
import SignUpTabInfo from '../components/molecules/SignUpTabInfo'
import SignUpTabMore from '../components/molecules/SignUpTabMore'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import Merchant from '../models/Merchant'
import { setMerchant } from '../redux/actions/merchant';

export interface Props {
    navigation: any,
    merchant: Merchant, set: Function
}
const SignUpTab: React.FC<Props> = ({navigation}) => {
    const [state, setState] = useState("phone")
    const [name, setName] = useState("")
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [businessName, setBusinessName] = useState("")
    const [locality, setLocality] = useState("")
    const [town, setTown] = useState("")
    const [city, setCity] = useState("")
    const [landmark, setLandmark] = useState("")
    const [gst, setGst] = useState("")
    const [pan, setPan] = useState("")
    const [sabpay, setSabpay] = React.useState(true);
    const [self, setSelf] = React.useState(true);
    const [kirana, setKirana] = React.useState(true);
    const [grocery, setGrocery] = React.useState(true);
    
    const updateBackend = () => {
        
    }
        

    if(state == "phone") {
        return (
            <SignUpTabName navigation={navigation} setState={setState} name={name} setName={setName} setLatitude={setLatitude} setLongitude={setLongitude}/>
        )
    }
    if(state == "info") {
        return (
            <SignUpTabInfo navigation={navigation} setState={setState} businessName={businessName} setBusinessName={setBusinessName}
            locality={locality} setLocality={setLocality}
            town={town} setTown={setTown}
            city={city} setCity={setCity}
            landmark={landmark} setLandmark={setLandmark}
            gst={gst} setGst={setGst} 
            pan={pan} setPan={setPan}/>
        )
    }
    if(state == "more") {
        return (
            <SignUpTabMore navigation={navigation} setState={setState} sabpay={sabpay} setSabpay={setSabpay} 
            self={self} setSelf={setSelf}
            kirana={kirana} setKirana={setKirana}
            grocery={grocery} setGrocery={setGrocery}/>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        merchant: state.merchantReducer.merchant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set: (merchant: Merchant) => dispatch(setMerchant(merchant)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpTab)
