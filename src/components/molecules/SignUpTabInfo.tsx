import React, {useState} from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import InputText from '../atoms/InputText'
import {BodyText, HeaderText} from '../atoms/Text'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'

export interface Props {
    navigation: any, setState: Function,
    businessName: string, setBusinessName: Function,
    locality: string, setLocality: Function,
    town: string, setTown: Function, 
    city: string, setCity: Function,
    landmark: string, setLandmark: Function,
    gst: string, setGst: Function, 
    pan: string, setPan: Function
}
const SignUpTabInfo: React.FC<Props> = ({navigation, setState, businessName, setBusinessName, locality, setLocality, town, setTown, city, setCity, landmark, setLandmark, gst, setGst, pan, setPan}) => {
    const [present, setPresent] = useState("basic")
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
