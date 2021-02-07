import Merchant from '../../models/Merchant';
import MerchantDetails from '../../models/MerchantDetails';
import { SET_MERCHANT, MerchantActionTypes, SET_MERCHANT_DETAILS } from './types'

export const setMerchant = (merchant: Merchant): MerchantActionTypes => {
    return {
        type: SET_MERCHANT,
        data: merchant
    }
};

export const setMerchantDeatils = (merchant: MerchantDetails): MerchantActionTypes => (
    {
        type: SET_MERCHANT_DETAILS,
        data: merchant
    }
);
