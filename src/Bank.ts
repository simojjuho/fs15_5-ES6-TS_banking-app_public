import Branch from "./Branch";
import Customer from "./Customer";

class Bank {
    name!: string
    branches: Branch[] = []
    constuctor(name: string) {
        this.name = name
        this.branches = []
    }

    addBranch (branch: Branch): boolean {}

    addCustomer (branch: Branch, customer: Customer): boolean {}

    addCustomerTransaction (branch: Branch, customerId: string, amount: number): boolean {}

    findBranchByName (branchName: string): Branch[] | null {}

    checkBranch (branch: Branch): boolean {}

    listOfCustomers (branch: Branch, printList: boolean): boolean {}
}