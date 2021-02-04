import React, {useState} from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import InputText from '../atoms/InputText'
import {BodyText, HeaderText} from '../atoms/Text'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'

export interface Props {
    navigation: any, setState: Function
}
const SignUpTabPic: React.FC<Props> = ({navigation, setState}) => {
    return (
        <View style={styles.container}>
            <HeaderText style={{marginTop: 70}}>Business Details</HeaderText>
            <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                <PurpleRoundBtn text="Next" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => setState("pic")}/>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.push("LoginTab")}>
                    <BodyText>Already Have an Account? <HeaderText style={{color: colors.primary}}>Log-In</HeaderText></BodyText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpTabPic

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})
