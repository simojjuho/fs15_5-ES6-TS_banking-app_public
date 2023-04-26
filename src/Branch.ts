import Customer from "./Customer"

export default class Branch{
    private name!: string
    private customers: Customer[]
    constructor(name: string){
        this.name = name
        this.customers = []
    }

    getName(): string { return this.name }

    getCustomers(): Customer[] {}

    addCustomer(customer: Customer):boolean {}

    addCustomerTransaction(id: string, transaction: number):boolean {}

    findCustomer(id: string): Customer | null {}
}