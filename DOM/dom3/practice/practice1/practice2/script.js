let ullist = document.querySelector('ul')
let lilist = document.querySelectorAll('li')
let text = document.querySelector('input')
let button = document.querySelector('#click')

// ullist.addEventListener('mouseover',function(){
//     ullist.textContent=ullist.textContent.toUpperCase()
// })
// ullist.addEventListener('mouseout',function(){
//     ullist.textContent=ullist.textContent.toLowerCase()
// })
// ullist.addEventListener('mouseover', function (){
//     for (i = 0; i < lilist.length; i++) {

//         lilist[i].textContent = lilist[i].textContent.toUpperCase()
//     }

//  })
//  ullist.addEventListener('mouseout', function (){
//     for (i = 0; i < lilist.length; i++) {

//         lilist[i].textContent = lilist[i].textContent.toLowerCase()
//     }

//  })
for (i = 0; i < lilist.length; i++) {
    CreatButton(lilist[i])
}
button.addEventListener('click', function () {
    let text1 = text.value
    let file = document.createElement('li')
    file.textContent = text1
    CreatButton(file)
    ullist.appendChild(file)
    text.value = " "
})

function CreatButton(li) {
    let remove = document.createElement('button')
    remove.textContent = 'remove'
    remove.classList = 'remove'
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = 'up'
    up.classList = 'up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'down'
    down.classList = 'down'
    li.appendChild(down)

}

ullist.addEventListener('click', function (event) {
    if (event.target.tagName === "BUTTON") {

        if (event.target.className === "remove") {
            let li = event.target.parentNode
            let ui = li.parentNode
            ui.removeChild(li)
        }
        if (event.target.className === 'up') {
            let li = event.target.parentNode
            let ui = li.parentNode
            let pre= li.previousElementSibling
            ui.insertBefore(li,pre)


        }
        if (event.target.className === 'down') {
            let li = event.target.parentNode
            let ui = li.parentNode
            let pre= li.nextElementSibling
            ui.insertBefore(pre,li)

        }

    }
})