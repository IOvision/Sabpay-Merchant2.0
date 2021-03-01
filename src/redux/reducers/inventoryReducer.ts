import { InventoryActionTypes, InventoryState, SET_INVENTORY } from '../actions/types'

const initialState: InventoryState = {
    inventory: undefined
}

const merchantReducer = (state = initialState, action: InventoryActionTypes) => {
    switch(action.type) {
        case SET_INVENTORY:
            return {
                inventory: action.data
            }
        default:
            return state;
    }
}

export default merchantReducer;