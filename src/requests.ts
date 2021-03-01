import axios from 'axios'
import { Auth } from 'aws-amplify'

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": 'RDFCXXNZwW2FBxGykBgKz3E0MPcz3A5I4yFqzmlw' }
import Merchant from './models/Merchant'
import Inventory from './models/Inventory'
import Order from './models/Order'

export const getUserData = (phone: string, token: string, cb: (err: any, resp: Merchant) => void) => {
    axios.get(`/merchant/${phone}`, {
        headers: {
            "SP-TOKEN": token
        }
    })
    .then(res => {
        if(res.data.data[0].username)
            cb(false, new Merchant(res.data.data[0]))
        else
            cb('signup', null)
    })
    .catch(err => cb(err.response, null))
}


export const putUserData = (a: {name: string, phone: string}, cb: (err: any, resp: Merchant) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.put(`/merchant/${a.phone}`, {
            UpdateExpression: "set username= :n",
            ExpressionAttributeValues: {
                ":n": a.name,
            }
        }, {
            headers: {
                "SP-TOKEN": token
            }
        })
        .then(res => {
            cb(false, new Merchant(res.data.data[0]))
        })
        .catch(err => {
            console.log(err)
            cb(true, null)
        })
    })
}

//provision + metadata creation + inventoryCreation
export const createInventory = (a: Inventory, phone: string, cb: (err: any, resp: Inventory) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.post('/inventory/', a.toJson(), {
            params: {
                phone
            },
            headers: {
                "SP-TOKEN": token
            }
        })
        .then(res => {
            console.log(res.data.data)
            cb(false, res.data.data[0])
        })
        .catch(err => {
            console.log(err)
            cb(true, null)
        })
    })
}

export const getOrders = (invId: string, lastKey: string | null, cb: (err: any, resp: Order[]) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.get(`/inventory/${invId}/order/active`, {
            params: {
                lastKey: lastKey ? lastKey : null
            },
            headers: {
                "SP-TOKEN": token 
            }
        })
        .then(res => {
            cb(false, res.data.data)
        })
        .catch(err => {
            console.log(err)
            cb(true, null)
        })
    })
}

export const getInventory = (invId: string, cb: (err: any, resp: Inventory) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.get(`/inventory/${invId}`, {
            headers: {
                "SP-TOKEN": token
            }
        })
        .then(res => {
            console.log(res.data.data)
            cb(false, res.data.data)
        })
        .catch(err => {
            console.log(err)
            cb(true, null)
        })
    })
}