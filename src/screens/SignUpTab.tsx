import React, {useState} from 'react'
import SignUpTabName from '../components/molecules/SignUpTabName'
import SignUpTabInfo from '../components/molecules/SignUpTabInfo'
import SignUpTabMore from '../components/molecules/SignUpTabMore'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import Merchant from '../models/Merchant'
import { setInventory } from '../redux/actions/inventory';
import { createInventory, putUserData } from '../requests'
import { signIn } from '../redux/actions/merchant'
import Inventory from '../models/Inventory'

export interface Props {
    navigation: any,
    merchant: Merchant,
    signIn: (merchant: Merchant) => void
}
const SignUpTab: React.FC<Props> = ({navigation, route}) => {
    const [state, setState] = useState("phone")
    const [name, setName] = useState("")
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [businessName, setBusinessName] = useState("Rakshit ki Dukaan")
    const [locality, setLocality] = useState("Sector-M, Ashiyana, Kanpur Road")
    const [town, setTown] = useState("Lucknow")
    const [city, setCity] = useState("Uttar Pradesh")
    const [landmark, setLandmark] = useState("Mera Ghar")
    const [gst, setGst] = useState("Nhi hai")
    const [pan, setPan] = useState("KMNPS7131F")
    const [sabpay, setSabpay] = React.useState(true);
    const [self, setSelf] = React.useState(true);
    const [kirana, setKirana] = React.useState(true);
    const [grocery, setGrocery] = React.useState(true);
    
    const updateBackend = () => {
        var a = {
            name: name,
            phone: route.params.phone
        }
        console.log(a)
        putUserData(a, (err, resp) => {
            if (err)
            return console.log("Error aa gyi")
            const temp = {
                shopname: businessName,
                address: `${locality}, ${town}, ${city}`,
                latitude: "25.599778",
                longitude: "85.134688"
            }
            const inv = new Inventory(temp)
            createInventory(inv, a.phone, (err, resp) => {
                if (err)
                return console.log(err)
            })
        })
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
            <SignUpTabMore updateBackend={updateBackend} sabpay={sabpay} setSabpay={setSabpay} 
            self={self} setSelf={setSelf}
            kirana={kirana} setKirana={setKirana}
            grocery={grocery} setGrocery={setGrocery} />
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
        signIn: (merchant: Merchant) => dispatch(signIn(merchant)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpTab)
