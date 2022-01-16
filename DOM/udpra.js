//bank withdrawl and deposite

class bank{
    constructor(acconame,accountno,bal){
        this.acconame=acconame,
        this.accountno=accountno,
        this.bal=bal,
        this.transaction=[]
    }
    deposite(amount){
        this.transaction.push(amount)
        console.log(`before cur bal: ${this.bal}`)
        this.bal=this.bal+amount
        console.log(` ur depoiseted bal: ${amount};total bal: ${this.bal}`)
        console.log( this.bal)

    }
    withdrawl(amount){
        if(amount<this.bal){
            this.transaction.push(-amount)
            console.log(`before cur bal: ${this.bal}`)
            this.bal=this.bal-amount
            console.log(` ur depoiseted bal: ${amount};total bal: ${this.bal}`)
            console.log( this.bal)
            console.log(this.transaction)

        }
    }
}

let akshay =new bank('akshay pardeshi',27111995,115000)
console.log(akshay)
akshay.deposite(5000)
akshay.deposite(5555)
akshay.withdrawl(10000)