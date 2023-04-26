import Branch from "./Branch";
import Customer from "./Customer";

export default class Bank {
    public name!: string
    private branches!: Branch[]
    constructor(name: string) {
        this.name = name
        this.branches = []
    }

    addBranch (branch: Branch): boolean {
        if(this.checkBranch(branch)) return false
        this.branches.push(branch)
        return true
    }

    addCustomer (branch: Branch, customer: Customer): boolean {
        if(!this.checkBranch(branch)) return false
        return branch.addCustomer(customer)
    }

    addCustomerTransaction (branch: Branch, customerId: string, amount: number): boolean {
        return this.checkBranch(branch) && branch.addCustomerTransaction(customerId, amount)
    }

    findBranchByName (branchName: string): Branch[] | null {
        //Get all branches of which name in lower case matches the given string
        const listOfBranches = this.branches.filter(elem => elem.getName().toLowerCase().includes(branchName))
        if (listOfBranches.length === 0) return null
        return listOfBranches
    }

    checkBranch (branch: Branch): boolean {
        return this.branches.some(branchElem => branchElem  === branch)
    }

    listOfCustomers (branch: Branch, printList: boolean): boolean {
        if(!this.branches.includes(branch)) return false
        if(printList) branch.getCustomers().forEach(customer => {
            console.log(customer)
        });
        return true
    }
}

const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John");
const customer2 = new Customer("Anna");
const customer3 = new Customer("John");
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);
customer1.addTransaction(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listOfCustomers(westBranch, true));
console.log(arizonaBank.listOfCustomers(sunBranch, true));