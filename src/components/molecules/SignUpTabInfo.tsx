import React, {useState} from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import InputText from '../atoms/InputText'
import {BodyText, HeaderText} from '../atoms/Text'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'

export interface Props {
    navigation: any, setState: Function
}
const SignUpTabInfo: React.FC<Props> = ({navigation, setState}) => {
    const [present, setPresent] = useState("basic")
    const [businessName, setBusinessName] = useState("")
    const [locality, setLocality] = useState("")
    const [town, setTown] = useState("")
    const [city, setCity] = useState("")
    const [landmark, setLandmark] = useState("")
    const [gst, setGst] = useState("")
    const [pan, setPan] = useState("")
    if(present == "basic") {
        return (
            <View style={styles.container}>
                <HeaderText style={{marginTop: 70}}>Business Details</HeaderText>
                <InputText value={businessName} placeholder="Business Name" onChangeText={setBusinessName}/>
                <InputText value={locality} placeholder="Locality" onChangeText={setLocality}/>
                <InputText value={town} placeholder="Town" onChangeText={setTown}/>
                <InputText value={city} placeholder="State" onChangeText={setCity}/>
                <InputText value={landmark} placeholder="Landmark" onChangeText={setLandmark}/>
                <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                    <PurpleRoundBtn text="Next" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => setPresent("advance")}/>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderText style={{marginTop: 70}}>Business Details</HeaderText>
            <InputText value={gst} placeholder="GST Number" onChangeText={setGst}/>
            <InputText value={pan} placeholder="PAN Number" onChangeText={setPan}/>
            <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                <PurpleRoundBtn text="Next" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => setState("more")}/>
            </View>
        </View>
    )
}

export default SignUpTabInfo

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})
