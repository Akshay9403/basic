// //extenshion of cypress file .js

// // variable key word define- let and const
// let x = 10
// console.log(x)
// x = 50
// console.log(x) // by using late we can change value of x but we can use const then we can not change value
// //const p=11
// //console.log(p) 
// //p = 20 // cannt change value due to const
// //console.log(p)
// console.log('======================')

// //ARITHMATIC OPERATION 
// // +,-,*,/,%
// let a = 10
// let b = 20
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

// console.log('====================')
// a = 100
// b = 20
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log('=============================')
// //DRY=do not repeat yourself then use function
// // when on operation can write many time for olny similar kind of open. then we use function
// // FUNCTION means 
// function calculator(x, y) {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
//     console.log(x % y)
// }
// calculator(10, 5)
// calculator(20, 2)
// // [function functionname(para,para){ (Block)
//       //statement
// //}
// // function call (arguments)]


// // function without parameter and  without return type
// function add() {
//     console.log(10 + 10)
// }
// add()
// add()
// add()
// // output always fix
// //function with parameter and without return type
// function add(x, y) {
//     console.log(x + y)
// }
// add(50, 100)
// add(10, 20)
// add(20, 50)
// //function with parameter and with return type
// function add(x, y) {
//     return x + y
// }
// let p = add(50, 500)
// console.log(p)

// function mul(r, s) {
//     return r * s
// }
// let q = mul(10, 20)
// console.log(q)
// // after return we can re-use  use this value for another cal
// console.log(p + q)
// console.log(p - q)
// console.log(p * q)
// console.log((p + q) * 0.1)

// let fullname1 = "akshay"
// // 0 1 2 3 4 5
// // a k s h a y

// console.log(fullname1[0])
// console.log(fullname1[1])
// console.log(fullname1[3])
// console.log(fullname1[-2])

// //OBJECT----------> Properties and Method

// //Properties-------->return
// //Method----------> Action , return type

// let city = "Mumbai"
// let c = city.length
// console.log(c)
// //.length is properties
// // .toUppercase,.tolowercase,.indexOf,.includes is object
// let cc = city.toUpperCase()
// console.log(cc)

// let ll = city.toLowerCase()
// console.log(ll)

// let city1 = "nagpur"
// // 0 1 2 3 4 5
// // n a g p u r
// let ii = city1.indexOf('g')
// console.log(ii)

// let iii = city1.indexOf("r")
// console.log(iii)

let firstname="akshay"
let aa=firstname.includes('sha')
console.log(aa)
let bb=firstname.includes('bb')
console.log(bb)
//HOW TO WRITE FUNCTION 


// function mul(x,y){------------------FUNCTION DECLARATION
//     return x*y
// }
// let m=mul(20,20)
// console.log(m)

// let mul= function( p,q){-------------------FUNCTION EXPLENATION
//     return p*q
// }
// let r= mul(50,40)
// console.log(r)


// let mul= (p,q)=>p*q  ------------------ARROW FUNCTION
// let s= mul(60,10)
// console.log(s)
// OR
//  let mul= (p,q)=>{
//     return p*q  //------------------ARROW FUNCTION
// }
// let s= mul(60,10)
// console.log(s)

// let name = 'akshay pardeshi'
// console.log(name.length)//15
// console.log(name[5])//y
// console.log(name[6])// 
// console.log(name.length-1)// take always last index
// // when all index print, take more time then we use loop 
// for(let i=0;i<name.length;i++){
//     //console.log(i)// all index print but i need latter then
//     console.log(name[i])
// }

// // cheack revers 
// for(i=name.length;i>=0;i--){
//     console.log(i)
//     //console.log(name[i])
// }