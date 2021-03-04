export default class Merchant {
    username: string
    address: string[]
    phone: string
    invId: string

    constructor(data: any) {
        this.username = data.username
        this.address = data.address
        this.phone = data.phone
        this.invId = data.invId || undefined
    }

    public static fromString(a: string): Merchant {
        return JSON.parse(a);
    }

    public getInventoryId(): string {
        const a = this.invId.split("+")
        return a[0]
    }

}
