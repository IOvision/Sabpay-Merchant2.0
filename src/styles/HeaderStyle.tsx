import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
    container: ViewStyle,
}

const HeaderStyle = StyleSheet.create<Style>({
  container: {
    height: 54,
    width: `100%`,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 30, 
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});

export default HeaderStyle;
