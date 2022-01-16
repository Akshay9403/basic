// array can be written in [''] or [""]

let names = ['akshay', 'ankita', 'sanjay', 'mutan']

// console.log(names.length)
// console.log(names[1])
// console.log(names[names.length - 1])
console.log(typeof names)
// let a =names.length
// console.log(a)
// console.log(typeof a)

//METHODS

//push()---action to add element at end of array and return in the number(total length of array)

// let villages =['pune','mumbai','thane','jalna']

// let v = villages.push('aurangabad')
// console.log(v)//5
// console.log(typeof v)//number
// console.log(villages)//[ 'pune', 'mumbai', 'thane', 'jalna', 'aurangabad' ]

//pop()---action to remove last element of array and return in string

// villages =['pune','mumbai','thane','jalna']
// let vv =villages.pop()
// console.log(vv)// jalna
// console.log(typeof vv)//string
// console.log(villages)//['pune','mumbai','thane']

//shift()--- action to remove starting element of array and return in string

// villages =['pune','mumbai','thane','jalna']
// let vvv= villages.shift()
// console.log(vvv)//pune
// console.log(typeof vvv)//string
// console.log(villages)//[ 'mumbai', 'thane', 'jalna' ]

//unshift()---action to add element at starting of array and return in number(total number of array)

// villages =['pune','mumbai','thane','jalna']
// let vvvv= villages.unshift('nagpur')
// console.log(vvvv)//5
// console.log(typeof vvvv)//number
// console.log(villages)//[ 'nagpur','mumbai', 'thane', 'jalna' ]


// number = [11, 22, 33, 44, 55]
// // all index print 
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i])
// }

// for (let ia= number.length; ia >= 0; ia--) {
//     console.log(number[ia])
// }


// let bike=['hero','honda','apache','duke']

// let b=bike.indexOf('honda')
// console.log(b)
//jar array madhe element asel tar to tyachi index value deil ani nasel tar -1 deil

// let b1=bike.indexOf('Honda')
// console.log(b1)

//console.table(bike)//***

// let b2=bike.includes('apache')
// console.log(b2)// asel tar true nahi tar false


// // calcule current age
// let BirthYear = [1995, 1963, 1970, 1993, 2000, 2005]
// let Currentage=[]
// for(let i=0;i<BirthYear.length;i++){
//      Currentage.push(2021-(BirthYear[i]))
// }
// console.log(Currentage)


// map() function
//.map(function(current element/el,index,array)){
//     console.log()
// }

// by using map()

// let pp = BirthYear.map(function (el, index, array) {
//     return 2021 - el

// })
// console.log(pp) [ 26, 58, 51, 28, 21, 16 ]

// // condition check

// let Currentage=[25,30,50,60,80,55,47,98,78]
// let check=[]

// for(let i=0;i<Currentage.length;i++){
//     if(Currentage[i]>=50){
//         check.push(Currentage[i])
//     }
// }
// console.log(check)

// let below=[]

// for(let ia=0;ia<Currentage.length;ia++){
//     if(Currentage[ia]<=50){
//         below.push(Currentage[ia])
//     }
// }
// console.log(below)

// //sum of total number

// let ages=[25,30,50,60,80,55,47,98,78]
// let total=0
// for(ib=0;ib<ages.length;ib++){
//     total=total+ages[ib]
// }
// console.log(total)

// add 2 all element
// using map()
// let ages = [25, 30, 50, 60, 80, 55, 47, 98, 78]

// let aaa = ages.map(function (el, index, array) {
//        return el = el + 2
// })
// console.log(aaa)

//20/12/21
// function to another function

// let sum= function(a,b){
//     return a+b
// }

// function additon(a,b,fn){
//     let ab=fn(a,b)
//     return ab
// }

// let aa=additon(10,20,sum)
// console.log(aa)

//21/12/21
// IMP TOPIC
// map,filter,reduce,forEach vaildy use in API development

let BirthYear = [1995, 1974, 1963, 1970]
let current = []
for (let i = 0; i < BirthYear.length; i++) {
    let bb = 2021 - BirthYear[i]
    current.push(bb)
}
console.log(current)

let aa = BirthYear.map(function (el) {
    return 2021 - el
})
console.log(aa)

let ages = [25, 30, 50, 60, 80, 55, 47, 98, 78]
let above = []
for (i = 0; i < ages.length; i++) {
    if (ages[i] > 50) {
        above.push(ages[i])

    }
}
console.log(above)
let ff = ages.filter(function (el) {
    return el > 50
})
console.log(ff)

ages = [25, 30, 50, 60, 80, 55, 47, 98, 78]
let total = 0

for (i = 0; i < ages.length; i++) {
    total = total + ages[i]
}
console.log(total)

let rr = ages.reduce(function (acc, el) {
    return acc + el
})
console.log(rr)
console.table(ages)
//22/12/2021
// forEach
let x = ['akshay', 'pravin', 'mayur']

// for (let i=0;i<x.length;i++){
//     console.log('welcome '+ x[i])
// }

let xx = x.forEach(function (el) {
    console.log("welcome " + el)
})

console.log(xx)// undefined because written kahi nahi karat pan console ahe mhanun print honar

// every()-array cha pratyak element condition la satisfy hot asel tarach true yenar
//  some()--ek jari element true asel tar purn array la true deil
// both written boolian value
let number1 = [11.22, 33, 44, 55]

let mm = number1.every(function (el, index, array) {
    return el > 10
})
console.log(mm)// true
let mm1 = number1.every(function (el, index, array) {
    return el > 12
})
console.log(mm1)// false

let mm2=number1.some(function(el){
    return el>10
})
console.log(mm2)//true

let mm3=number1.some(function(el){
    return el>12
})
console.log(mm3)//true

let mm4=number1.some(function(el){
    return el<10
})
console.log(mm4)//false

//reverse()

let nn=number1.reverse()
console.log(nn)
//concat- join two array return in one totak array
number1 = [11.22, 33, 44, 55]
let number2=[55,88,66,77,70]

let nm=number1.concat(number2)
console.log(nm)//[11.22, 33, 44,55, 55, 88, 66, 77, 70]

let mn=number1.concat(number1)
console.log(mn)//[11.22, 33, 44,55,11.22, 33, 44,55]

// method chaining
// two method can write one time 

// let pp=[11,22,44,55,66].filter(function(el){
//     return el>50
// }).reduce(function(acc,el){
//     return acc+el
// })
// console.log(pp)

//split-- return array

let q="akshay-sanjay-pardeshi-9403693659"
console.log(q.split('-'))//[ 'akshay', 'sanjay', 'pardeshi', '9403693659' ]
console.log(q.split('a'))//[ '', 'ksh', 'y-s', 'nj', 'y-p', 'rdeshi-9403693659' ]
//join
let qq=[ 'akshay', 'sanjay', 'pardeshi', '9403693659' ]
console.log(qq.join('-'))//akshay-sanjay-pardeshi-9403693659
console.log(qq.join('@'))//akshay@sanjay@pardeshi@9403693659