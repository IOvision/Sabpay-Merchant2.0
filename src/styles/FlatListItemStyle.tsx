import colors from '../assets/colors'
import { StyleSheet, ViewStyle, TextStyle, ImageProps, ImageStyle } from 'react-native';
import { color } from 'react-native-reanimated';
interface StyleOrderItem {
    container: ViewStyle,
    image: ViewStyle,
    row: ViewStyle
}
export const OrdersItemStyles = StyleSheet.create<StyleOrderItem>({
  container: { 
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    borderColor: colors.mediumGrey,
    display: 'flex',
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 70, 
    height: 80, 
    borderWidth: 1,
    padding: 10,
    borderColor: colors.mediumGrey,
    borderRadius: 10
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
})
