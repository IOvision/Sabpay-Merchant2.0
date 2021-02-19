import React, { useEffect  } from 'react'
import { View,StyleSheet } from 'react-native'
import InputText from '../atoms/InputText'
import RNLocation from "react-native-location"; 
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'


export interface Props {
    navigation: any,
    setState: Function,
    name: any, 
    setName: Function, 
    setLatitude: Function, 
    setLongitude: Function
}
const SignUpTabPhone: React.FC<Props> = ({navigation, setState, name, setName, setLatitude, setLongitude}) => {
    let locationSubscription = null
    useEffect(() => {
        RNLocation.configure({
          distanceFilter: 5.0
        });
        
        RNLocation.requestPermission({
          ios: "whenInUse",
          android: {
            detail: "fine",
            rationale: {
              title: "Location permission",
              message: "We use your location to demo the library",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        }).then(granted => {
          if (granted) {
            _startUpdatingLocation();
          }
        });
      }, [])

      const _startUpdatingLocation = () => {
        locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            setLatitude(locations[0].latitude)
            setLongitude(locations[0].longitude)
          }
        );
        locationSubscription();
      };
  
    return (
        <View style={styles.container}>
            <InputText style={{marginTop: 100}} value={name} placeholder="Name" onChangeText={setName} />
            <View style={{justifyContent: "flex-end", marginBottom: 30, alignItems: "center", flex: 1}}>
                <PurpleRoundBtn text="Next" style={{paddingHorizontal: 100, marginBottom: 10}} onPress={() => setState("info")}/>
            </View>
        </View>
    )   
}

export default (SignUpTabPhone)

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 40
    }
})
