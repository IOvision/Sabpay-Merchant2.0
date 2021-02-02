export default class Item {
    
    PK: string;
    SK: string;
    name: string;
    image: string;
    desc: string;
    child: {
        key: number,
        name: string,
        price: number,
        onDiscount: boolean,
        discountPrice: number
    }[];
    selected: number

    constructor(a: any) {
        this.PK = a.PK
        this.SK = a.SK
        this.name = a.name
        this.image = a.image
        this.desc = a.desc
        this.child = a.child
        this.selected = 0
    }
    
    public log() {
        console.log(this)
    }

    public static itemsFromList(json: Object[]) {
        var list: Item[] = []
        json.forEach(element => {
            var a = new Item(element)
            list.push(a)
        });
        return list
    }

    public getSelectedId(selected: number) {
        return `${this.SK}-${selected}`
    }
}