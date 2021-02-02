import React from 'react'
import { View,StyleSheet, Image } from 'react-native'
import styles from '../../styles/BorderedStyle'
import {BodyText} from '../atoms/Text'

export default function StoreItemItem() {
    return (
        <View style={{...styles.container, margin: 2}}>
            <Image style={stylesIn.image} source={{uri: "https://img-getpocket.cdn.mozilla.net/296x148/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fimages.fastcompany.net%2Fimage%2Fupload%2Fw_1280%2Cf_auto%2Cq_auto%2Cfl_lossy%2Fwp-cms%2Fuploads%2F2021%2F01%2Fp-1-90593602-i-spoke-to-99-big-thinkers-about-what-our-world-after-coronavirus-might-look-like-this-is-what-i-learned.jpg"}} />
            <BodyText>Aashirwad Multi grain aata</BodyText>
            <BodyText>Rs. 215</BodyText>
        </View>
    )
}
const stylesIn = StyleSheet.create({
    image: {
        height: 150, 
        width: '100%'
    }
})
