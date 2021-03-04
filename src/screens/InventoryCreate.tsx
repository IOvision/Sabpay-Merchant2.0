import React, {useState} from 'react'
import InventoryCreateInfo from '../components/molecules/InventoryCreateInfo'
import InventoryCreateMore from '../components/molecules/InventoryCreateMore'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import Merchant from '../models/Merchant'
import { setInventory } from '../redux/actions/inventory';
import { createInventory, putUserData } from '../requests'
import { signIn } from '../redux/actions/merchant'
import Inventory, { NewInventoryData } from '../models/Inventory'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Props {
    navigation: any,
    merchant: Merchant,
    signIn: (merchant: Merchant) => void
}
const InventoryCreate: React.FC<Props> = ({navigation, merchant, signIn}) => {
    const [state, setState] = useState("info")
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
        const inven: NewInventoryData = {
            shopName: businessName,
            address: {
                locality,
                town,
                city,
                landmark
            },
            phone: merchant.phone,
            deliveryOpted: true,
            latitude: "25.599778",
            longitude: "85.134688"
        }
        createInventory(new Inventory(inven), merchant.phone, (err, resp) => {
            if (err) return console.log("Error", err)
            console.log("done")
            var merch = merchant
            merch.invId = resp
            AsyncStorage.setItem("@Merchant", JSON.stringify(merch))
            .then(data => {
                signIn(merch)
                navigation.pop()
            })
            .catch(err => {
                console.log(err)
            })
        })
    }
        
    if(state == "info") {
        return (
            <InventoryCreateInfo navigation={navigation} setState={setState} businessName={businessName} setBusinessName={setBusinessName}
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
            <InventoryCreateMore updateBackend={updateBackend} sabpay={sabpay} setSabpay={setSabpay} 
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
export default connect(mapStateToProps, mapDispatchToProps)(InventoryCreate)
