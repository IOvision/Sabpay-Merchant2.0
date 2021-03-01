import React from 'react'
import Root from './src/navigation/Root'
import Amplify, { Auth } from 'aws-amplify'
import awsConfig from './aws-exports'
import AmplifyStorage from './src/models/AmplifyStorage'
import Merchant from './src/models/Merchant'
import Inventory from './src/models/Inventory'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { signIn } from './src/redux/actions/merchant'
import { setInventory } from './src/redux/actions/inventory'

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

export interface Props {
  setSignedIn: (merchant: Merchant) => void,
  setInventory: (inventory: Inventory) => void
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
  
  getMerchantData = () => new Promise((resolve, reject) => {
    AsyncStorage.getItem('@Merchant')
    .then(data => {
      console.log(data)
      if (data) this.props.setSignedIn(Merchant.fromString(data))
      resolve(true)
    })
    .catch(err => reject(err))
  })

  componentDidMount() {
    Promise.all([this.getMerchantData()])
    .then(data => {
      this.setState({
        isLoading: false
      })
    })
    .catch(err => console.log(err))
  }

  render() {

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

const mapDispatchToProps = (dispatch) => {
  return {
    setSignedIn: (merchant: Merchant) => dispatch(signIn(merchant)),
    setInventory: (inventory: Inventory) => dispatch(setInventory(inventory))
  }
}

export default connect(null, mapDispatchToProps)(App)