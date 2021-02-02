import Item from "./Item";

export default class CartItem {
    
    PK: string;
    SK: string;
    name: string;
    image: string;
    variant: string;
    variantKey: number;
    price: number;
    originalPrice: number | undefined;
    quantity: number;
    
    constructor(a: Item, selected: number) {
        console.log("constrcutor: " + Object.keys(a))
        this.PK = a.PK
        this.SK = a.SK
        this.name = a.name
        this.image = a.image
        this.variantKey = selected
        this.variant = a.child[selected].name
        this.price = a.child[selected].price
        if(a.child[selected].onDiscount){
            this.originalPrice = a.child[selected].price
            this.price = a.child[selected].discountPrice
        }
        this.quantity = 0
    }
    
    public static getTotal(items: CartItem[], qty: any) {
        var total = 0
        for (var i = 0; i < items.length; i++){
            total += items[i].price * qty[items[i].getSelectedId()]
        }
        return total
    }

    public static itemsWithQuantity(items: CartItem[], quantity: any) {
        var a = [...items]
        a.forEach(item => {
            item.quantity = quantity[item.getSelectedId()]
        });
        return a
    }

    public getSelectedId() {
        return `${this.SK}-${this.variantKey}`
    }
}