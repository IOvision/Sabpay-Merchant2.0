import MerchantDetails from '../../models/InventoryMetadata';
import { SET_INVENTORY, SET_INVENTORY_METADATA, InventoryActionTypes } from './types'
import Inventory from '../../models/Inventory';
import InventoryMetadata from '../../models/InventoryMetadata';

export const setInventory = (inventory: Inventory): InventoryActionTypes => {
    return {
        type: SET_INVENTORY,
        data: inventory
    }
};

export const setInventoryDetails = (inventoryMetadata: InventoryMetadata): InventoryActionTypes => (
    {
        type: SET_INVENTORY_METADATA,
        data: inventoryMetadata
    }
);
