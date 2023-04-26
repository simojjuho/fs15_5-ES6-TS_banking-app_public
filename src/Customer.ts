import { v4 as uuid } from 'uuid'
import { Transaction } from './types'

export default class Customer{
    private name!: string
    private id: string
    private transactions: Transaction[]
    constructor(name: string){
        this.name = name
        this.id = uuid()
        this.transactions = []
    }

    getNAme(): string { return this.name }

    getId(): string { return this.id }

    getTransactions(): Transaction[] { return this.transactions }

    getBalance(): number {
        return this.transactions.reduce((acc, curr) => {
            return acc + curr.amount
        }, 0)
    }

    addTransaction( amount: number ): boolean {
        if (this.getBalance() - amount < 0) return false
        const newTransaction: Transaction = {
            amount: amount,
            date: new Date()
        }
        this.transactions.push(newTransaction)
        return true
    }
}