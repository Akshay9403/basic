// array prob
let students = [
    {
        fullname: "akshay pardeshi",
        ages: 27,
        city: "pune",
        skills: ['java', 'python', 'cpp']
    },
    {
        fullname: "yogesh kandje",
        ages: 26,
        city: 'aurangabad',
        skills: ['python', 'cpp', 'design', 'creo']
    },
    {
        fullname: "mayur kharat",
        ages: 27,
        city: 'pune',
        skills: ['java','python']
    },
    {
        fullname: 'pravin badage',
        ages: 24,
        city: 'mumbai',
        skills: ['informetica']
    },
    {
        fullname: 'akshay sapate',
        ages: 28,
        city: 'bid',
        skills: ['informetica', 'cypress']
    }
]

//find skills whose later start with a
let a = students.filter(function (el) {
    return el.fullname[0] === "a" || el.fullname[0] === "A"
}).forEach(function (el) {
    console.log(`${el.fullname} : ${el.skills.length}`)
})
// OR  startswith() 
let b = students.filter(function (el) {
    return el.fullname.startsWith('a') || el.fullname.startsWith('A')
}).forEach(function (el) {
    console.log(`${el.fullname} = ${el.skills}`)

})// string interpulation ch output nehami string yete 

// why ${} use 
let firstname = "akshay"
let lastname = 'pardeshi'//output req---hello akshay pardeshi !
console.log("hello " + firstname + " " + lastname + " " + '!')//hello akshay pardeshi !
console.log(`hello ${firstname} + ${lastname} !`)//hello akshay + pardeshi !

// prog   ----
//add username to all user
//EX
// let p={
//     fullname: 'akshay sapate',
//     ages: 28,
//     city: 'bid',
//     skills: ['informetica','cypress']
// }
// console.log(p.fullname.split(' ')[0][0]+p.fullname.split(' ')[1][0])// as

students.forEach(function (el) {
    el.userName = el.fullname.split(' ')[0][0] + el.fullname.split(' ')[1][0]
})// does not return so output cant see
console.log(students)

// prog
// avg age
let c = students.reduce(function (acc, el) {
    return acc + el.ages
}, 0) / students.length
console.log(c)

// user more than 3 skills

let d = students.find(function (el) {
    return el.skills.length >= 3
})
console.log(d)// jya madhe 3skills ahet te sagale obj bhetnar


let e = students.find(function (el) {
    return el.skills.length >3
}).fullname
console.log(e)

//prog 
// both city pune skiis python

let f=students.filter(function(el){
    return el.city==='pune' && el.skills.includes('python')
})
console.log(f)
//OR
let g=students.filter(function(el){
    return el.city==='pune' && el.skills.indexOf('python')>0
})
console.log(g)


//pro


let ia=[11,22,33,44,55,77,88,11,22,33]

let nonduplicate=[]
for (i=0;i<ia.length;i++){
    if(nonduplicate.indexOf(ia[i])<0){
        nonduplicate.push(ia[i])
    }   
}
console.log(nonduplicate)//[11, 22, 33, 44,55, 77, 88]
//OR

let k=ia.filter(function(el,index,array){
    return array.indexOf(el)===index
})
console.log(k)//[11, 22, 33, 44,55, 77, 88]