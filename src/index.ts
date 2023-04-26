import Bank from './Bank'
import Branch from './Branch'
import Customer from './Customer'

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

console.log('findByBranchName: ',arizonaBank.findBranchByName("bank"))
console.log('findByBranchName: ',arizonaBank.findBranchByName("sun"))

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)

customer1.addTransaction(-1000)
console.log(customer1.getBalance())
console.log(arizonaBank.listOfCustomers(westBranch, true))
console.log(arizonaBank.listOfCustomers(sunBranch,true))
