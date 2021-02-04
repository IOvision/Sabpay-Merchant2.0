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

interface StyleCategoryPageCategoryItem {
  container: ViewStyle,
  image: ViewStyle,
  text: TextStyle,
  textContainer: ViewStyle
}

export const CategoryPageCategoryItemStyles = StyleSheet.create<StyleCategoryPageCategoryItem>({
  container: {
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      width: '100%',
      height: 200,
      marginBottom: 40,
      borderWidth: 1,
      borderColor: colors.mediumGrey
    },
    image: {
      width: `100%`,
      height: 200,
      resizeMode: 'cover',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.darkgrey,
    },
    textContainer: {
      alignItems: 'center',
      backgroundColor: colors.white,
      position: 'absolute',
      padding: 13,
      bottom: -20,
      width: '100%',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.mediumGrey,
    },
})