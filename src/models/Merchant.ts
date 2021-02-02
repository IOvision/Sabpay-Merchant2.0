import Item from './Item'

export default class Merchant {
    
    PK: string;
    SK: string;
    name: string;
    address: string;
    phone: string;
    image: string;
    rating: number;
    tags: {
        title: string,
        tag: string[]
    }[]
    isOpen: boolean;
    exclude: {
        tag: string,
        items: Item[]
    }[];
    offers: Item[];
    storeSp: Item[];
    latitude: number;
    longitude: number;

    constructor(a: any) {
        console.log('debug', a.offers)
        this.PK = a.PK
        this.SK = a.SK
        this.name = a.name
        this.address = a.address
        this.image = a.image
        this.rating = a.rating
        this.tags = a.tags
        this.isOpen = a.isOpen
        this.exclude = a.exclude
        this.offers = a.offers
        this.storeSp = a.storeSp
        this.phone = a.phone
        this.latitude = 0
        this.longitude = 0
    }

    public static itemsFromList(json: Object[]) {
        var list: Merchant[] = []
        json.forEach(element => {
            var a = new Merchant(element)
            list.push(a)
        });
        return list
    }
    
    public toJson() {
        return JSON.stringify(this)
    }

    public static fromString(a: string) {
        return new Merchant(JSON.parse(a))
    }
}