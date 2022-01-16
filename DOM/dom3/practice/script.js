//  <ul>
//     <li>car</li>
//     <li>bike</li>
//     <li>cycle</li>
//     <li>scooter</li>
// </ul>
// <input type="text">
// <button>click</button>
let a = document.querySelector('ul')
let b = document.querySelectorAll('li')
let c = document.querySelector('input[type="text"]')
let e = document.querySelector('button')
e.addEventListener('click',function(){
    let texrr =c.value
    let file=document.createElement('li')
    file.textContent=c.value
    a.appendChild(file)
})
// a.addEventListener('mouseover',function(){
//     for(i=0;i<b.length;i++){
//         b[i].textContent = b[i].textContent.toUpperCase()
//     }
    
// })


// a.addEventListener('mouseout',function(){
//     for(i=0;i<b.length;i++){
//         b[i].textContent = b[i].textContent.toLowerCase()
//     }
    
// })