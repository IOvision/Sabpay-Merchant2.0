import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
    container: ViewStyle,
    logo: ViewStyle,
    start_icon: ViewStyle,
    end_icon: ViewStyle
}

const HeaderStyle = StyleSheet.create<Style>({
  container: {
    height: 54,
    width: `100%`,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: 'hidden',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    padding: 20,
    margin: 10,
    alignSelf: 'center',
  },
  start_icon: {
    alignSelf: 'flex-start',
  },
  end_icon: {
    alignSelf: 'flex-end',
  }
});

export default HeaderStyle;
