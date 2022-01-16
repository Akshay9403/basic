// STRING ----('PARAMETER')
// STRING METHODS has gives action and return type
//1).toUpperCase()--action all char. converted into UPPERCASE return string
//2).toLowerCase()--action all char. converted into lowecase return string
//3).indexOf()-- action find index of passed parameter return number
//4).include()-- action search the substrings and return true and false in boolian

// getting ans number but cannt converted into string

// let s= bird.toUpperCase().toLowerCase().toUpperCase().length.toLowerCase()
// console.log(s)

// let i =bird.indexOf('c')
// console.log(i)
// let ii= bird.indexOf('k')
// console.log(ii)

// let y= bird.includes('ck')
// console.log(y)
// let yy=bird.includes('CK')
// console.log(yy)

// console.log("akshay".startsWith('a'))//true

// console.log("akshay".endsWith('y'))//true

// console.log("akshay".startsWith('aks'))//true

// console.log("akshay".endsWith('hay'))//true

// console.log("akshay".startsWith('Aks'))//false

// console.log("akshay".endsWith('haY'))//false

// let name1 = "akshaypardeshi"
// //0    1   2   3   4  5  6  7  8  9  10 11 12 13
// //a    k   s   h   a  y  p  a  r  d  e  s  h  i
// //-14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
// console.log(name1.slice(1))//kshaypardeshi
// console.log(name1.slice(6))//pardeshi
// console.log(name1.slice(-8))//pardeshi
// console.log(name1.slice(-6,-1))//rdesh
// console.log(name1.slice(5,-3))//yparde
// console.log(name1.slice(-10,-3))//ayparde
// console.log(name1.slice(-3,-10))// blank string imp

// let full="akshay-sanjay-pardeshi-9403693659"
// console.log(full.split('-'))//[ 'akshay', 'sanjay', 'pardeshi', '9403693659' ]

// console.log(full.charAt(10))//j
// console.log(full.charCodeAt(10))//j ASCII value table 106

// &&(and operator) ||(or) !(not)
// //&&(and operator)
// True  True-true
// True false-false
// false True-false
// false false-false

// ||(or operator)
// True  True-true
// True false-true
// false True-true
// false false-false

// !(not )
// ! true--false
// ! false--true

// camparision oparator
// <(lessthan)>(greterthan)<=(lessthanequalto)>=(greterthanequalyo)
// // ===   ==  !== !=
// console.log(10 === 10)// true
// console.log(10 !== 10)// false
// console.log(10 != '10')//false
// console.log(10 == '10')//true
// console.log(10 === '10')//false

// for, while

// for - finite( specific number tak hi loop chahiye), definite time
//while- infinite(jo paryant condition true nahi hot to paryant)

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// let ia = 0
// for (; ia <= 10; ia++) {
//     console.log(ia)
// }

// let e = 0
// while (e <= 10) {
//     console.log(e)
//     e++//very imp

// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log(i)// 0 1 2 3 4
// }
// // or printing statement change

// for (let ia = 0; ia <= 10; ia++) {
    
//     console.log(ia)// 0 1 2 3 4 5
//     if (ia === 5) {
//         break
//     }
// }


// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         continue
//     }
//     console.log(i)// 0 1 2 3 4 6 7 8 9 10
// }
// or printing statement change

// for (let ia = 0; ia <= 10; ia++) {
    
//     console.log(ia)// 0 1 2 3 4 5 6 7 8 9 10
//     if (ia === 5) {
//         continue
//     }
// }

// if(9==9){
//     console.log('hello')
// }
// else if (8==8){
//     console.log('hello 2')
// }
// else{
//     console.log('new to js')
// }// first condition true zali tar khali condition check karayala nahi yenar directly statment write honar


// if(9==10){
//     console.log('hello')
// }
// else if (8==8){
//     console.log('hello 2')
// }
// else{
//     console.log('new to js')
// }// first condision false zali mhanun khali yeun condition chck hpil ani true ali tar statment print honar 


// if(9==10){
//     console.log('hello')
// }
// else if (8==5){
//     console.log('hello 2')
// }
// else{
//     console.log('new to js')
// }//both condition are not true then print statemne else


// if(9==9){
//     console.log('hello')
// }
//  if (8==8){
//     console.log('hello 2')
// }
// else{
//     console.log('new to js')
// }// first cond true asel tari dusari cond check karnar ani second cond true ali tar donhi statement print honar


// if(9==10){
//     console.log('hello')
// }
// if (8==8){
//     console.log('hello 2')
// }
// else{
//     console.log('new to js')
// }//first cond false zali tar second cond check honar jar true ali tar statement print honar


// if(9==10){
//     console.log('hello')
// }
// if (8==10){
//     console.log('hello 2')
// }
// else{
//     console.log('new to js')
// }// both condion are false then print else statement 


