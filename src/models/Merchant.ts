export default class Merchant {
    username: string
    address: string[]
    phoneNumber: string
    invId: string

    constructor(data: any) {
        this.username = data.username
        this.address = data.address
        this.phoneNumber = data.phone
        this.invId = data.invId || undefined
    }

    public getPhone(): string {
        return this.phoneNumber.substr(3)
    }

    public static fromString(a: string): Merchant {
        return JSON.parse(a);
    }

    public getInventoryId(): string {
        const a = this.invId.split("+")
        return a[0]
    }

}
