export default class User {
    username: string
    address: string[]
    phoneNumber: string

    constructor(data: any) {
        this.username = data.username
        this.address = data.address
        this.phoneNumber = data.phoneNumber
    }

    public getPhone(): string {
        return this.phoneNumber.substr(3)
    }

    public static fromString(a: string): User {
        return JSON.parse(a);
    }
}