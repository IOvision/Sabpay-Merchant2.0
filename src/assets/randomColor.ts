const randomColor = [
    "#F7CA8F",
    "#F1B39A",
    "#F9F1D6",
    "#FFDFC9",
    "#F3CFC1",
    "#DF8888",
    "#FCECC0",
    "#FADECB",
    "#F7D0D5"
]

export const colorLength = randomColor.length
export default randomColor

//grey = placed
//amber - accepted
//red = rejected
//green = complete
// = delivered

export const getColorAccordingToStatus = (status: String) => {
    switch(status) {
        case "PLACED": return "#A9A9A9";
        case "ACCEPTED": return "#FFBF00";
        case "REJECTED": return "#eb3921";
        case "COMPLETE": return "#74eb21";
        case "DELIVERED": return "21bdeb";
        default: return "#ffffff";
    }
}
    
