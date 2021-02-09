import { SET_SIGNED_IN, SET_SIGNED_OUT, UserActionTypes, UserState } from '../actions/types'

const initialState: UserState = {
    merchant: undefined,
    signedIn: false
}

const userReducer = (state = initialState, action: UserActionTypes) => {
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