import React from 'react'
import Root from './src/navigation/Root'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
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
import { CaptionText } from './src/components/atoms/Text'
import { onCreateOrder } from './graphql/subscriptions'

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

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
        })
        .catch(err => console.log(err))
      } else {
        this.setState({
          ...this.state,
          isLoading: false
        })
      }
    })
    .catch(err => console.log(err))
    const subscription = API.graphql(
      graphqlOperation(onCreateOrder)
    ).subscribe({
      next: ({provider, value}) => {
        console.log(value)
      },
      error: error => console.log(error)
    })
  }

  render() {
    console.log(this.state.isLoading)
    if (!this.state.isLoading) {
      return (
        <Root />
      )
    }

    return (
      <View><CaptionText>Hello</CaptionText></View>
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
