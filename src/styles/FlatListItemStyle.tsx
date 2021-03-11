import colors from '../assets/colors'
import { StyleSheet, ViewStyle, TextStyle, ImageProps, ImageStyle } from 'react-native';
import { color } from 'react-native-reanimated';

interface StyleCategoryPageCategoryItem {
  container: ViewStyle,
  image: ViewStyle,
  text: TextStyle,
  textContainer: ViewStyle,
  touchable: ViewStyle
}

export const CategoryPageCategoryItemStyles = StyleSheet.create<StyleCategoryPageCategoryItem>({
  container: {
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      width: '100%',
      height: 200,
      borderWidth: 1,
      borderColor: colors.mediumGrey,
      justifyContent: 'flex-end'
    },
    touchable: {
      width: '100%',
      borderWidth: 1,
      borderColor: colors.mediumGrey,
      justifyContent: 'flex-end'
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
      width: '100%',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.mediumGrey,
    },
})