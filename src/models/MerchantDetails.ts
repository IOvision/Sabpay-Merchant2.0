import Item from './Item'

export default class MerchantDetails {
    
    SK: string;
    tags: string[];
    exclude: {
        tag: string,
        items: Item[]
    }[];
    offers: Item[];
    storeSp: {
        key: string,
        image: string
    }[];
    dealsOfTheDay: Item[]

    constructor(a: any) {
        this.SK = a.SK
        this.tags = a.tags
        this.exclude = a.exclude
        this.offers = a.offers
        this.storeSp = a.storeSp
        this.dealsOfTheDay = a.dealsOfTheDay
    }

    public static itemsFromList(json: Object[]) {
        var list: MerchantDetails[] = []
        json.forEach(element => {
            var a = new MerchantDetails(element)
            list.push(a)
        });
        return list
    }
    
    public toJson() {
        return JSON.stringify(this)
    }

    public static fromString(a: string) {
        return new MerchantDetails(JSON.parse(a))
    }
}