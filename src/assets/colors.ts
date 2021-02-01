type colorName = "primary" | "white" | "background" | "grey" | "lightGrey" | "mediumGrey" | "darkgrey" | "blue" | "danger" | "gold" | "green"

type colors = { [color in colorName]: string}

const colors: colors = {
  primary: '#8021EB', //purple
  white: "#ffffff",
  background: "#F9F9F9",
  grey: "#A7A7A7", //inactive navigation color
  lightGrey: "#E8E8E8", //textboxs/input fiels
  mediumGrey: "#CDCDCD", //orders color
  darkgrey: "#6D6D6D", //font color
  blue: "#04035C",
  danger: '#ff5252',
  gold: '#FFD700',
  green: '#008000',
};

export default colors