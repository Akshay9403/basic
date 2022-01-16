//closure
//scopes
//lexical scope

// let person={
//     age:25,
//     rollnumber:40,
//     firstname:"akshay",
//     birthyear:function(){
//         console.log(`${2021-this.age}`)//1996
//         console.log(this)//all obj litral,this means person

//         function add(){
//             console.log(this.firstname)
//         }
//         add()//undefined yeil because this goes to global
//     }       // by solve this prob we can use arro fun
// }
// person.birthyear()

//******************** */
// let person = {
//     age: 25,
//     rollnumber: 40,
//     firstname: "akshay",
//     birthyear: function () {
//         console.log(`${2021 - this.age}`)//1996
//         console.log(this)//all obj litral,this means person

//         let add = () => {
//             console.log(this.firstname)
//         }
//         add()//akshay
//     }
// }
// person.birthyear()

//**************************** */
//jar me warchya fun la arrow fun kele tar nahi chalnar
let person = {
    age: 25,
    rollnumber: 40,
    firstname: "akshay",
    birthyear: () => {
        console.log(`${2021 - this.age}`)//1996
        console.log(this)//all obj litral,this means person

        let add = () => {
            console.log(this.firstname)
        }
        add()//akshay
    }
}
person.birthyear()//NaN
//   {}
//  undefined

// lexical scope

// function addition(x,y){
//     console.log(x+y)//300
// }

// addition(10,20)

// function addition(x,y){
//     x=100
//     y=200
//     console.log(x+y)//300

//     function addition2(){
//         console.log(x+y)//300
//     }
//     addition2()
//     function addition3(){
//         let o=400
//         console.log(x+y+o)//700 is lexical scope
//     }
//     addition3()
// }

// addition(10,20)

//--------------------------

function cal(x, y) {
    console.log(x - y)//-10
    return x - y
    console.log(x - y)//return nantar kahi pan print kele tar output nahi yenar 
}
let a = cal(10, 20)
console.log(cal)//-10

//closure

function calage(x, y) {
    x = 100
    y = 200
    console.log(x + y)//300
    return function() {
        console.log(x + y)
    }
}
let c=calage(10, 20)
console.log(c)// return fun c madhe yenar
c()//300  return fun close zalyavar pan calage che verial access hot ahet tyalach closure mhantat
// return kelya war pan calage che parent he accebale hotat retun function madhe tyale cloure 
//scope of variable
{
    let r=1000// karnki let, var yancha scope fakt bracet paryant asto 
}
console.log(r)// r is not defined


