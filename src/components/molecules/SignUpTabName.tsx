import React, {useState} from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import InputText from '../atoms/InputText'
import {BodyText, HeaderText} from '../atoms/Text'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'

export interface Props {
    navigation: any,
    setState: Function
}
const SignUpTabPhone: React.FC<Props> = ({navigation, setState}) => {
    const [name, setName] = useState("")
        return (
        <View style={styles.container}>
            <InputText style={{marginTop: 100}} value={name} placeholder="Name" onChangeText={setName} />
            <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                <PurpleRoundBtn text="Next" style={{paddingHorizontal: 100, marginBottom: 10}} onPress={() => setState("info")}/>
            </View>
        </View>
    )   
}

export default SignUpTabPhone

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})
