let ullist = document.querySelector('ul')
let button = document.querySelector('#click')
let text = document.querySelector('input')
let lilist = document.querySelectorAll('li')

button.addEventListener('click', function () {
    let abc = text.value
    let file = document.createElement('li')
    file.textContent = abc
    CreatButton(file)
    ullist.appendChild(file)

})
for (i=0;i<lilist.length;i++){
    CreatButton(lilist[i])
}
function CreatButton(li){
   let remove= document.createElement('button')
   remove.textContent="remove"
   remove.classList="remove"
   li.appendChild(remove)

   let up= document.createElement('button')
   up.textContent="up"
   up.classList="up"
   li.appendChild(up)

   let down= document.createElement('button')
   down.textContent="down"
   down.classList="down"
   li.appendChild(down)
}