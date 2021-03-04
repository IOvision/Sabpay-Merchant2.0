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
import { setInventory, setInventoryMetadata } from './src/redux/actions/inventory'
import InventoryMetadata from './src/models/InventoryMetadata'
import { getInventoryMetadata, getInventory } from './src/requests'

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

export interface Props {
  setSignedIn: (merchant: Merchant) => void,
  setInventory: (inventory: Inventory) => void,
  setInventoryMetadata: (invMetadata: InventoryMetadata) => void
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
      console.log(data)
      const merchant = Merchant.fromString(data)
      if (data) this.props.setSignedIn(merchant)
      resolve(merchant)
    })
    .catch(err => reject(err))
  })
  

  componentDidMount() {
    Promise.all([this.getMerchantData()])
    .then(data => {
      Promise.all([getInventoryMetadata(data[0].invId), getInventory(data[0].invId.split("+")[1])])
      .then(merchant => {
        this.props.setInventoryMetadata(merchant[0])
        this.props.setInventory(merchant[1])
        this.setState({
          ...this.state,
          isLoading: false
        })
      })
      .catch(err => console.log(err))
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
    setInventory: (inventory: Inventory) => dispatch(setInventory(inventory)),
    setInventoryMetadata: (invMeta: InventoryMetadata) => (dispatch(setInventoryMetadata(invMeta)))
  }
}

export default connect(null, mapDispatchToProps)(App)