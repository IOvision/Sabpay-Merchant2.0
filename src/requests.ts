import axios from 'axios'
import { Auth } from 'aws-amplify'

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": 'RDFCXXNZwW2FBxGykBgKz3E0MPcz3A5I4yFqzmlw' }
import Merchant from './models/Merchant'

export const getUserData = (phone: string, token: string, cb: (err: any, resp: Merchant) => void) => {
    axios.get(`/merchant/${phone}`, {
        headers: {
            "SP-TOKEN": token
        }
    })
    .then(res => {
        if(res.data.data !== null)
            cb(false, new Merchant(res.data.data[0]))
        else
            cb('signup', null)
    })
    .catch(err => cb(err.response, null))
}


export const putUserData = (merchant: Merchant, cb: (err: any, resp: Merchant) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.put(`/merchant/${merchant.getPhone()}`, {
            UpdateExpression: "set phoneNumber= :p, ",
            ExpressionAttributeValues: {
                ":p": merchant.phone
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
            cb(true, null)
        })
    })
}

