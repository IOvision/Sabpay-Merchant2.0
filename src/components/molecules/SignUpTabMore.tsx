import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {HeaderText, BodyText} from '../atoms/Text'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
import { RadioButton } from 'react-native-paper';
import InfoBox from '../atoms/InfoBox'


export interface Props {
    navigation: any, setState: Function
}

const SignUpTabMore: React.FC<Props> = ({navigation, setState}) => {
    const [sabpay, setSabpay] = React.useState(true);
    const [self, setSelf] = React.useState(true);
    const [kirana, setKirana] = React.useState(true);
    const [grocery, setGrocery] = React.useState(true);
    return (
        <View style={styles.container}>
            <HeaderText style={{marginTop: 70}}>Business Details</HeaderText>
            <View style={{padding: 20}}>
                <BodyText style={{marginBottom: 20}}>Delivery Opted</BodyText>
                <InfoBox text="SabPay" style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10}}>
                    <RadioButton
                            value="Sabpay"
                            status={ sabpay ? 'checked' : 'unchecked' }
                            onPress={() => setSabpay(!sabpay)}
                        />
                </InfoBox>
                <InfoBox text="Self" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <RadioButton
                            value="Self"
                            status={ self ? 'checked' : 'unchecked' }
                            onPress={() => setSelf(!self)}
                        />
                </InfoBox>
            </View>
            <View style={{padding: 20}}>
                <BodyText style={{marginBottom: 20}}>Shop Category</BodyText>
                <InfoBox text="Kirana" style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10}}>
                    <RadioButton
                            value="Kirana"
                            status={ kirana ? 'checked' : 'unchecked' }
                            onPress={() => setKirana(!kirana)}
                        />
                </InfoBox>
                <InfoBox text="Grocery" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <RadioButton
                            value="Grocery"
                            status={ grocery ? 'checked' : 'unchecked' }
                            onPress={() => setGrocery(!grocery)}
                        />
                </InfoBox>
            </View>
            <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                <PurpleRoundBtn text="Next" style={{paddingHorizontal: 120, marginBottom: 10, alignItems: "center"}} onPress={() => navigation.replace("Main")}/>
            </View>
        </View>
    )
}

export default SignUpTabMore

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})