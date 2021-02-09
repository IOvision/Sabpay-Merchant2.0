import Merchant from '../../models/Merchant';
import User from '../../models/User';
import { SET_SIGNED_IN, SET_SIGNED_OUT, UserActionTypes } from './types'

export const signIn = (merchant: Merchant): UserActionTypes => (
    {
        type: SET_SIGNED_IN,
        merchant: merchant
    }
);

export const signOut = (): UserActionTypes => (
    {
        type: SET_SIGNED_OUT
    }
);