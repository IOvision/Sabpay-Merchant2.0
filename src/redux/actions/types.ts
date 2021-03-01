import Merchant from "../../models/Merchant"
import InventoryMetadata from '../../models/InventoryMetadata'
import Inventory from "../../models/Inventory"

//USER
export interface MerchantState {
    signedIn: boolean,
    merchant: Merchant
}

export const SET_SIGNED_IN = "SET_SIGNED_IN"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"

interface SignInAction {
    type: typeof SET_SIGNED_IN,
    merchant: Merchant
}

interface SignOutAction {
    type: typeof SET_SIGNED_OUT
}

export type MerchantActionTypes = SignInAction | SignOutAction

//MERCHANT
export interface InventoryState {
    inventory: Inventory
}

export const SET_INVENTORY = 'SET_INVENTORY'
export const SET_INVENTORY_METADATA = 'SET_INVENTORY_METADATA'

interface SetInventoryAction {
    type: typeof SET_INVENTORY,
    data: Inventory
}

interface SetInventoryMetadataAction {
    type: typeof SET_INVENTORY_METADATA,
    data: InventoryMetadata
}

export type InventoryActionTypes = SetInventoryAction | SetInventoryMetadataAction