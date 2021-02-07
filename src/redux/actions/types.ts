import Merchant from "../../models/Merchant"
import MerchantDetails from '../../models/MerchantDetails'

//USER
export interface UserState {
    signedIn: boolean
}

export const SET_SIGNED_IN = "SET_SIGNED_IN"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"

interface SignInAction {
    type: typeof SET_SIGNED_IN,
}

interface SignOutAction {
    type: typeof SET_SIGNED_OUT
}

export type UserActionTypes = SignInAction | SignOutAction

//MERCHANT
export interface MerchantState {
    merchant: Merchant
}

export const SET_MERCHANT = 'SET_MERCHANT'
export const SET_MERCHANT_DETAILS = 'SET_MERCHANT_DETAILS'

interface SetMerchantAction {
    type: typeof SET_MERCHANT,
    data: Merchant
}

interface SetMerchantDetailsActions {
    type: typeof SET_MERCHANT_DETAILS,
    data: MerchantDetails
}

export type MerchantActionTypes = SetMerchantAction | SetMerchantDetailsActions