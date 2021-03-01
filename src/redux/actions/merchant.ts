import Merchant from '../../models/Merchant';
import { SET_SIGNED_IN, SET_SIGNED_OUT, MerchantActionTypes } from './types'

export const signIn = (merchant: Merchant): MerchantActionTypes => (
    {
        type: SET_SIGNED_IN,
        merchant: merchant
    }
);

export const signOut = (): MerchantActionTypes => (
    {
        type: SET_SIGNED_OUT
    }
);