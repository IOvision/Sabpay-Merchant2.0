import User from '../../models/User';
import { SET_SIGNED_IN, SET_SIGNED_OUT, UserActionTypes } from './types'

export const signIn = (): UserActionTypes => (
    {
        type: SET_SIGNED_IN
    }
);

export const signOut = (): UserActionTypes => (
    {
        type: SET_SIGNED_OUT
    }
);