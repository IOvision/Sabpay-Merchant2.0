import SplashScreen from 'react-native-splash-screen'
import React from 'react'
import Root from './src/navigation/Root'
import Amplify, { Auth, Analytics, graphqlOperation } from 'aws-amplify'
import awsConfig from './aws-exports'
import AmplifyStorage from './src/models/AmplifyStorage'
import Merchant from './src/models/Merchant'
import Inventory from './src/models/Inventory'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { signIn } from './src/redux/actions/merchant'
import { setInventory, setInventoryMetadata } from './src/redux/actions/inventory'
import InventoryMetadata from './src/models/InventoryMetadata'
import { getInventoryMetadata, getInventory } from './src/requests'
import { RootState } from './src/redux/store'
import PushNotification from '@aws-amplify/pushnotification';


Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})
// App.js
PushNotification.onRegister(token => {
  console.log('onRegister', token);
  // PushNotification.updateEndpoint(token);
  AsyncStorage.setItem('@Token', token)
});
// PushNotification.onNotification(notification => {
//   if (notification.foreground) {
//     console.log('onNotification foreground', notification);
//     console.log('onNotification foreground', notification.data.default);
//   } else {
//     console.log('onNotification background or closed', notification);
//   }
//   // extract the data passed in the push notification
//   // const data = JSON.parse(notification.data['pinpoint.jsonBody']);
//   //console.log('onNotification data', notification);
//   // iOS only
//   // notification.finish(PushNotificationIOS.FetchResult.NoData);
// });
// PushNotification.onNotificationOpened(notification => {
//   console.log('onNotificationOpened', notification);
//   // extract the data passed in the push notification
//   // const data = JSON.parse(notification['pinpoint.jsonBody']);
//   //console.log('onNotificationOpened data', notification);
// });

// const endpointId = Analytics.getPluggable('AWSPinpoint')._config.endpointId;
// console.log("endpoint: ", endpointId)
export interface Props {
  setSignedIn: (merchant: Merchant) => void,
  setInventory: (inventory: Inventory) => void,
  setInventoryMetadata: (invMetadata: InventoryMetadata) => void,
  isSignedIn: boolean
}

export interface State  {
  isLoading: boolean,
  internet: boolean
}

class App extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      internet: true
    }
  }
  
  getMerchantData = () => new Promise<Merchant>((resolve, reject) => {
    AsyncStorage.getItem('@Merchant')
    .then(data => {
      if (data) {
        const merchant = Merchant.fromString(data)
        this.props.setSignedIn(merchant)
        resolve(merchant)
      }
      resolve(undefined)
    })
    .catch(err => reject(err))
  })
  

  componentDidMount() {
    Promise.all([this.getMerchantData()])
    .then(data => {
      if (data[0]) {
        Promise.all([getInventoryMetadata(data[0].invId), getInventory(data[0].invId.split("+")[1])])
        .then(merchant => {
          this.props.setInventoryMetadata(merchant[0])
          this.props.setInventory(merchant[1])
          this.setState({
            ...this.state,
            isLoading: false
          })
          SplashScreen.hide()
        })
        .catch(err => console.log(err))
      } else {
        this.setState({
          ...this.state,
          isLoading: false
        })
        SplashScreen.hide()
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.isLoading)
    if (!this.state.isLoading) {
      return (
        <Root />
      )
    }

    return (
      <View></View>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isSignedIn: state.merchantReducer.signedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSignedIn: (merchant: Merchant) => dispatch(signIn(merchant)),
    setInventory: (inventory: Inventory) => dispatch(setInventory(inventory)),
    setInventoryMetadata: (invMeta: InventoryMetadata) => (dispatch(setInventoryMetadata(invMeta)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
