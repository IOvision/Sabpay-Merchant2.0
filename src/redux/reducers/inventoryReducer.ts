import { InventoryActionTypes, InventoryState, SET_INVENTORY, SET_INVENTORY_METADATA } from '../actions/types'

const initialState: InventoryState = {
    inventory: undefined,
    inventoryMetadata: undefined
}

const merchantReducer = (state = initialState, action: InventoryActionTypes) => {
    switch(action.type) {
        case SET_INVENTORY:
            return {
                ...state,
                inventory: action.data
            }
        case SET_INVENTORY_METADATA:
            return {
                ...state,
                inventoryMetadata: action.data
            }
        default:
            return state;
    }
}

export default merchantReducer;