
// <h1>hello</h1>
// <ul>
//     <li>akshay</li>
//     <li>ankita</li>
//     <li>sanjay</li>
//     <li>nutan</li>
// </ul>
// <input type="text">
// <button>click me</button>

let a = document.querySelector('h1')
console.log(a)
let b = document.querySelector('ul')
console.log(b)
let c = document.querySelectorAll('li')
console.log(c)
let d = document.querySelector('button')
console.log(d)
// tagname[attribute="value"]
let e = document.querySelector('input[type="text"]')
console.log(e)
d.addEventListener('click', function () {
    let element = e.value
    let file = document.createElement('li')
    file.textContent=element
    b.appendChild(file)
    e.value=" "
})
// d.addEventListener('click', function () {
//     a.style.color = e.value

// })

// // b.addEventListener('mouseover',function(){
// //     b.textContent=b.textContent.toUpperCase()
// // })

// b.addEventListener('mouseover', () => {
//     for (i = 0; i < c.length; i++) {
//         c[i].textContent = c[i].textContent.toUpperCase()
//     }
// })

// b.addEventListener('mouseout', () => {
//     for (i = 0; i < c.length; i++) {
//         c[i].textContent = c[i].textContent.toLowerCase()
//     }
// })


// a.addEventListener('mouseover', () => {

//     a.textContent = a.textContent.toUpperCase()

// })

// a.addEventListener('mouseout', () => {
//     a.textContent = a.textContent.toLowerCase()

// })