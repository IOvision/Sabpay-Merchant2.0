import { StyleSheet, TextStyle } from 'react-native'
import Colors from '../assets/colors'

interface Style {
    headerText: TextStyle,
    bodyText: TextStyle,
    captionText: TextStyle,
    offerText: TextStyle   
}

const TextStyles = StyleSheet.create<Style>({
    headerText: {
        fontSize: 18,
        marginBottom: 2,
        fontFamily: 'OpenSans-SemiBold',
        letterSpacing: 0.1
    },
    bodyText: {
        fontSize: 16,
        fontWeight: "400",
        maxWidth: 250,
        marginBottom: 4
    },
    captionText: {
        fontSize: 20,
        marginBottom: 2,
        color: Colors.darkgrey,
        fontFamily: 'OpenSans-Bold',
    },
    offerText: {
        fontSize: 12,
        fontWeight: "400",
        maxWidth: 250,
        marginBottom: 4,
        color: "green"
    }
})
export default TextStyles
