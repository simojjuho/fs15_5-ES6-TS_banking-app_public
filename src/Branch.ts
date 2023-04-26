import Customer from "./Customer"

export default class Branch{
    private name!: string
    private customers: Customer[]
    constructor(name: string){
        this.name = name
        this.customers = []
    }

    getName(): string { return this.name }

    getCustomers(): Customer[] { return this.customers }

    addCustomer(customer: Customer):boolean {
        if(this.customers.includes(customer)) return false
        this.customers.push(customer)
        return true
    }

    addCustomerTransaction(id: string, transaction: number):boolean {
        const customer = this.findCustomer(id)
        if(!customer) return false
        return customer.addTransaction(transaction)
    }

    findCustomer(id: string): Customer | null {
        const customer = this.getCustomers().find(custmr => custmr.getId() === id)
        if(!customer) return null
        return customer
    }
}