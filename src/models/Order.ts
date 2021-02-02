import CartItem from './CartItem'

export interface UserOrderDetails {
    name: string,
    phone: string,
    address: string,
}

export interface MerchantOrderDetails {
    name: string,
    phone: string,
    address: string
}

export default class Order {

    items: CartItem[]
    total: string
    discount: string
    id: string
    status: string
    deliveryType: string
    user: UserOrderDetails
    merchant: MerchantOrderDetails

    constructor() {
        this.items = [];
        this.total = "";
        this.discount = "";
        this.user = {
            name: "",
            phone: "",
            address: "",
        };
        this.id = "";
        this.merchant = {
            name: "",
            phone: "",
            address: ""
        };
        this.status = "";
        this.deliveryType = "";
    }

    public fullDetails(obj: any) {
        var a = new Order()
        a.items = obj.items;
        a.total = obj.total;
        a.discount = obj.discount;
        a.user = obj.user;
        a.id = obj.SK
        a.merchant = obj.merchantName
        a.status = obj.status
        return a
    }

    public static partialDetails(items: CartItem[], total: string, discount: string, deliveryType: string, user: UserOrderDetails, merchant: MerchantOrderDetails) {
        var a = new Order();
        a.items = items;
        a.total = total;
        a.discount = discount;
        a.deliveryType = deliveryType;
        a.user = user;
        a.merchant = merchant;
        return a;
    }

    public toJSON() {
        var a = {
            items: this.items,
            total: this.total,
            discount: this.discount,
            user: this.user,
            merchant: this.merchant,
            deliveryType: this.deliveryType
        }
        return a;
    }

    public static itemsFromList(json: Object[]) {
        var list: Order[] = []
        json.forEach(element => {
            var a = new Order();
            a = a.fullDetails(element);
            list.push(a)
        });
        return list
    }

}