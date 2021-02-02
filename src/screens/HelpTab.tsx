import React, {useState} from 'react'
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import InputText from '../components/atoms/InputText'
import {BodyText, HeaderText} from '../components/atoms/Text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors'
import PurpleRoundBtn from '../components/atoms/PurpleRoundBtn'

export default function HelpTab() {
    const [query, setQuery] = useState("")
    const DATA = ["query1", "query2", "query3"]
    return (
        <View style={styles.container}>
            <InputText placeholder="Enter your query" style={{marginTop: 30, margin: 20}}
                value={query} onChangeText={setQuery}/>
            <HeaderText style={styles.header}>What issues are you facing?</HeaderText>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return (
                <TouchableOpacity onPress={() => setQuery(item)} 
                    style={styles.suggestions} activeOpacity={0.9}>
                    <BodyText>{item}</BodyText>
                    <Icon name="chevron-right" size={24} />
                </TouchableOpacity>)
                }}
                showsVerticalScrollIndicator={false}
            />
            <PurpleRoundBtn text="Ask" style={{alignSelf: "center", marginBottom: 50, paddingHorizontal: 50}} mode="gradient"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {display: "flex", flex: 1, backgroundColor: "white"},
    header: {color: colors.primary, marginStart: 10, marginBottom: 20, marginTop: 20},
    suggestions: {padding: 10, borderStyle: "solid", borderBottomColor: colors.mediumGrey, borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30}
})