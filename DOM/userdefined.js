// //object litral
// let amol = {
//     fullname: 'amol deshmukh',
//     rollnumber: 55,
//     age: 28,
//     skills: ['c', 'python']
// }
// let akshay = {
//     fullname: 'akshay pardeshi',
//     rollnumber: 77,
//     age: 29,
//     skills: ['c', 'python']
// }// pratyak veli obj lihanyasathi time lagato tar apan ek blue print banau shakto tyat sagale 
// // property taku shakto pan saglyanchi pro same pahije tyala apan class mhanu

// class person {
//     fullname = undefined
//     rollnumber = undefined
//     age = undefined
//     skills = undefined
// }

// // jar apan class call kell tar 
// let amol2 = new person()
// console.log(amol2)//person {
// //     fullname: undefined,
// //     rollnumber: undefined,
// //     age: undefined,
// //     skills: undefined
// //   }
// //key tar sagale yeun gele pan kahi add karayache asel

// amol2.fullname = 'amol lohar'
// amol2.age = 25
// console.log(amol2)//person {
// //     fullname: 'amol lohar',
// //     rollnumber: undefined,
// //     age: 25,
// //     skills: undefined
// //   }

// let akshay2 = new person()// new class bhetala
// // value update karavi
// akshay2.fullname = "akshay sanjay pardeshi"
// akshay2.rollnumber = 777
// akshay2.age = 27
// akshay2.skills = ['reading', 'movie']
// console.log(akshay2)//person {
// //     fullname: 'akshay sanjay pardeshi',
// //     rollnumber: 777,
// //     age: 27,
// //     skills: [ 'reading', 'movie' ]
// //   }

// console.log(typeof person)//function
// // 1] setting the property outside the class
// class person2 {
//     fullname = undefined
//     age = 55
//     display() {
//         console.log('hello ' + this.fullname)
//     }
// }

// let ajay = new person2
// console.log(ajay)
// ajay.fullname = 'ajay patil'
// console.log(ajay)//person2 { fullname: 'ajay patil', age: 55 }
// ajay.display()//hello ajay patil


// // 2]setting the proprty at that time of object creation

// class person3 {
//     constructor(fullname, age, roll) {
//         this.fullname = fullname
//         this.age = age
//         this.roll = roll
//     }

//     display() {
//         console.log(this.fullname)
//     }

// }
// let mayur = new person3("mayur kharat", 28, 787)
// console.log(mayur)//person3 { fullname: 'mayur kharat', age: 28, roll: 787 }
// mayur.display()// mayur kharat
// console.log(mayur.roll)//787

// //3]using set method

// class person4 {

//     setage(age) {
//         this.age = age
//     }
//     setroll(rollnumber) {
//         this.roll = rollnumber
//     }
//     setfullname(fullname) {
//         this.fullname = fullname
//     }
// }

// let karan = new person4
// console.log(karan)//person4 {}
// karan.roll = 707
// karan.fullname = "karan jadhav"
// karan.age = 24
// console.log(karan)//person4 { roll: 707, fullname: 'karan jadhav', age: 24 }

// 28/12/2021

//bank withdrawl nd deposite

// class bank {
//     constructor(accName, accNo, Bal) {
//         this.accName = accName,
//         this.accNo = accNo,
//         this.Bal = Bal
//         this.transaction = []
//     }

// }
// let yogesh1 = new bank('yogesh kandje', 112255, 100000)
// console.log(yogesh1)

// deposite amount
// class bank {
//     constructor(accName, accNo, Bal) {
//         this.accName = accName,
//         this.accNo = accNo,
//         this.Bal = Bal
//         this.transaction = []
//     }
//     deposite(amount){
//         this.Bal=this.Bal+amount
//         console.log(`the current balance ${this.Bal}`)
//         return this.Bal
//     }
    
// }
// let yogesh1 = new bank('yogesh kandje', 112255, 100000)
// let a=yogesh1.deposite(5000)
// console.log(yogesh1)// bal = 105000

// withdrawl amount

// class bank {
//     constructor(accName, accNo, Bal) {
//         this.accName = accName,
//         this.accNo = accNo,
//         this.Bal = Bal
//         this.transaction = []
//     }
//     withDrawl(amount){
//         if(amount<this.Bal){
//             this.Bal=this.Bal-amount
//             console.log(`the current bal ${this.Bal}`)
//             return this.Bal
//         }
//         else{
//             console.log(`less fund`)
//         }
//     }
    
    
    
// }
// let yogesh1 = new bank('yogesh kandje', 112255, 100000)
// let a=yogesh1.withDrawl(500)
// console.log(a)

// last 5 tras

class bank {
    constructor(accName, accNo, Bal) {
        this.accName = accName,
        this.accNo = accNo,
        this.Bal = Bal
        this.transaction = []
    }
    deposite(amount){
        this.transaction.push(amount)
        this.Bal=this.Bal+amount
        console.log(`the current balance ${this.Bal}`)
        return this.Bal
    }
    withDrawl(amount){
        if(amount<this.Bal){
            this.transaction.push(-amount)
            this.Bal=this.Bal-amount
            console.log(`the current bal ${this.Bal}`)
            return this.Bal
        }
        else{
            console.log(`less fund`)
        }
    }
    lastfivetransaction(){
        console.log(this.transaction.slice(-5))
    }
    totaltrasum(){
        let total=this.transaction.reduce(function(acc,el){
            return acc+Math.abs(el)
        })
        console.log(total)
    }
    
    
    
}
let yogesh1 = new bank('yogesh kandje', 112255, 100000)
let a=yogesh1.withDrawl(500)
yogesh1.withDrawl(1500)
yogesh1.deposite(500000)
yogesh1.withDrawl(500)
yogesh1.deposite(8000)
yogesh1.withDrawl(5500)
yogesh1.withDrawl(5100)
yogesh1.lastfivetransaction()
yogesh1.totaltrasum()