import { SET_SIGNED_IN, SET_SIGNED_OUT, MerchantActionTypes, MerchantState } from '../actions/types'

const initialState: MerchantState = {
    merchant: undefined,
    signedIn: false
}

const userReducer = (state = initialState, action: MerchantActionTypes) => {
    switch(action.type) {
        case SET_SIGNED_IN:
            return {
                signedIn: true,
                merchant: action.merchant
            };
        case SET_SIGNED_OUT:
            return {
                ...state,
                signedIn: false
            };
        default:
            return state;
    }
}

export default userReducer;