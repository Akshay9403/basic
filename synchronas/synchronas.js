//synchronous== line by line excution honar,ek excute hoi paryant dusara thambun rahil
//Asynchronous--jyacha code purn zala to run, koni konawar pan depend nahi ,is already defines in java
//synchronous
// function add(x,y){
//     console.log(x+y)
// }
// function sub(x,y){
//     console.log(x-y)
//     console.log('hellooo..........')
//     alert('chal bhaag')

// }
// sub(40,10)
// add(25,20)// jo paryant alert war click nahi karnar to paryant add function run nahi honar yalach sch

//Asynchronous

// function add(x,y){
//     console.log(x+y)//3

// }
// function sub(x,y){
//     console.log(x-y)//1
//     console.log('hellooo..........')//2
//     setTimeout(function(){
//         alert('chal bhaag')
//     },5000)//4


// }
// sub(40,10)
// add(25,20)

// function add(x,y){
//     console.log(x+y)//3

// }
// function sub(x,y){
//     console.log(x-y)//1
//     setTimeout(function(){
//         alert('chal bhaag')
//     },5000)//4
//     console.log('hellooo..........')//2

//    // asign fun do not stop the excution 

// }
// sub(40,10)
// add(25,20)

// call back hell-----promisses--------cypress build

setTimeout(function () {
    console.log('akshay')
    setTimeout(function () {
        console.log('akshay sanjay')
        setTimeout(function () {
            console.log('akshay sanjay pardeshi')

        },3000)

    }, 3000)

}, 3000)

//jo tringle bala ahe tyala call back hell
// apan jevha real time che pro lihato tyaveli call back cha khup problem hoto tyasathi promisses solution anale ahe
 
