import Item from './Item'

export interface NewInventoryData {
    shopName: string,
    address: InventoryAddress,
    phone: string,
    deliveryOpted: boolean,
    latitude: string,
    longitude: string,
}

export interface InventoryAddress {
    locality: string,
    town: string,
    city: string,
    landmark: string
}

export default class Inventory {
    
    PK: string;
    SK: string;
    shopName: string;
    address: InventoryAddress;
    phone: string;
    image: string;
    rating: number;
    tags: {
        [key: string]: string[]
    };
    isOpen: boolean;
    exclude: {
        tag: string,
        items: Item[]
    }[];
    offers: Item[];
    storeSp: Item[];
    latitude: number;
    longitude: number;

    constructor(a?: any) {
        this.PK = a && a.PK || undefined
        this.SK = a && a.SK || undefined
        this.shopName = a && a.shopName || undefined
        this.address = a && a.address || undefined
        this.image = a && a.image || "NaN"
        this.rating = a && a.rating || 0
        this.tags = a && a.tags || []
        this.isOpen = a && a.isOpen || false
        this.exclude = a && a.exclude || []
        this.offers = a && a.offers || []
        this.storeSp = a && a.storeSp || []
        this.phone = a && a.phone || undefined
        this.latitude = a && a.latitude || 0
        this.longitude = a && a.longitude || 0
    }

    public static itemsFromList(json: Object[]) {
        var list: Inventory[] = []
        json.forEach(element => {
            var a = new Inventory(element)
            list.push(a)
        });
        return list
    }

    public getPhone(): string {
        return this.phone.substr(3)
    }

    public toJson() {
        return JSON.stringify(this)
    }

    public static fromString(a: string) {
        return new Inventory(JSON.parse(a))
    }
}