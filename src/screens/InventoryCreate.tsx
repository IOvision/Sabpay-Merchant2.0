import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import InventoryCreateInfo from '../components/molecules/InventoryCreateInfo'
import InventoryCreateMore from '../components/molecules/InventoryCreateMore'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import Merchant from '../models/Merchant'
import { createInventory, getUserData, putUserData } from '../requests'
import { signIn } from '../redux/actions/merchant'
import Inventory, { NewInventoryData } from '../models/Inventory'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HeaderText } from '../components/atoms/Text'
import InputText from '../components/atoms/InputText'
import PurpleRoundBtn from '../components/atoms/PurpleRoundBtn'
import Auth from '@aws-amplify/auth'

export interface Props {
    navigation: any,
    route: {
        params: {
            phone: string,
            state: number
        }
    }
    signIn: (merchant: Merchant) => void
}
const InventoryCreate: React.FC<Props> = ({navigation, signIn, route}) => {
    const [state, setState] = useState(route.params.state)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [name, setName] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [locality, setLocality] = useState("")
    const [town, setTown] = useState("")
    const [city, setCity] = useState("")
    const [landmark, setLandmark] = useState("")
    
    const handleName = () => {
        const a = {
            phone: route.params.phone,
            name: name
        }
        putUserData(a, (err, resp) => {
            if (err) console.log(err.response)
            setState(1)
        })
    }

    const updateBackend = () => {
        const inven: NewInventoryData = {
            shopName: businessName,
            address: {
                locality,
                town,
                city,
                landmark
            },
            phone: route.params.phone,
            deliveryOpted: true,
            latitude: "25.599778",
            longitude: "85.134688"
        }
        createInventory(new Inventory(inven), route.params.phone, (err, resp) => {
            if (err) return console.log("Error", err)
            console.log(resp)
            Auth.currentSession()
            .then(data => {
                const token = data.getIdToken().getJwtToken()
                getUserData(route.params.phone, token, (err, resp) => {
                    if (err) console.log(err)
                    AsyncStorage.setItem("@Merchant", JSON.stringify(resp))
                    .then(data => {
                        signIn(resp)
                        navigation.pop()
                    })
                    .catch(err => {
                        console.log(err)
                    })
                })
            })
        })
    }

    if(state == 0) {
        return(
            <View style={styles.container}>
            <InputText style={{marginTop: 100}} value={name} placeholder="Name" onChangeText={setName} />
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn text="Next" style={{paddingHorizontal: 100, marginBottom: 10}} onPress={() => handleName()}/>
                </View>
            </View>
        )
    }
    if(state == 1) {
        return (
            <View style={styles.container}>
                <HeaderText style={{marginTop: 70}}>Business Details</HeaderText>
                <InputText value={businessName} placeholder="Business Name" onChangeText={setBusinessName}/>
                <InputText value={locality} placeholder="Locality" onChangeText={setLocality}/>
                <InputText value={town} placeholder="Town" onChangeText={setTown}/>
                <InputText value={city} placeholder="State" onChangeText={setCity}/>
                <InputText value={landmark} placeholder="Landmark" onChangeText={setLandmark}/>
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn text="Next" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => updateBackend()}/>
                </View>
            </View>
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

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})
