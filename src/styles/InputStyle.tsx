import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../assets/colors'

interface Style {
    background: ViewStyle,
    placeholder: ViewStyle,
    text: TextStyle,
    error: ViewStyle
}

const InputStyle = StyleSheet.create<Style>({
    background: {
        flexDirection: 'row',
        backgroundColor: colors.lightGrey,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        padding: 5
    },
    placeholder: {
        padding: 5,
        color: '#6E6E6E',
        fontWeight: 'bold',
        flex: 1
    },
    text: {
        padding: 5,
        color: colors.primary,
        fontWeight: 'bold',
    },
    error: {
        borderColor: 'red',
        borderWidth: 1
    }
})

export default InputStyle