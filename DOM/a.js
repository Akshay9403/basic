// let p = document.querySelector('h1')
// p.addEventListener('click', function(){
//     p.style.color = 'green'
// })

// let q= document.querySelector('h2')
// q.addEventListener('click',function(){
//     q.style.color=('red')
// })

// p.addEventListener('click',function(){
//     p.textContent='wowowowowoo'
// })

// q.addEventListener('click',function(){
//     q.textContent='you can do it'
// })
// let r = document.querySelector('p')
// r.addEventListener('click',function(){
//     r.textContent="make it"
// })

// q=document.querySelector('h1')
// let r =document.querySelector('button')
// r.addEventListener('click',function(){
//     q.style.color='green'
// })


// follow the steps
// 1. salect the Element
// 2. based on the use action  1.create the element,2.retrive,3.update,4.detete the element

//<p id="diff" class='head name='ename'> hello </p>
// add atribute to element
// update the value of atribute
//delete the atribue of element

//SO WE CAN CHANGE HTML ELEMENT OF THE PAGE

// SALECTION KARANE KE TARIKE

//document is a object
//document.querySelector(cssSalector)

//<h1 id="diff" class="ny" name='ename'> hello </p>

// css salector Genarik formula
//tagName[ztribute=value]  *** eg-- p[id="diff"]
// only tagname we can salect eg---p
//but more than one tagname availabl so problem
//.red ---------salecting by class name
//#diff------ salecting by id

let one = document.querySelector('h1')
console.log(one)

// class name
let two = document.querySelector('.ny')
console.log(two)

//id 
let three = document.querySelector('#diff')
console.log(three)

//generik formula
let four = document.querySelector('h1[id="diff"]')
console.log(four)

let five = document.querySelector('h1[class="ny"]')
console.log(five)

let six = document.querySelectorAll('li')// return node list
console.log(six)

// after salet use it
one.addEventListener('click',function(){
    one.textContent='bhaaaggg'
})


