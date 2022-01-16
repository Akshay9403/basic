let ullist = document.querySelector('ul')
let lilist = document.querySelectorAll('li')
let button = document.querySelector('#click')
let input = document.querySelector('input')
let body= document.querySelector("body")

ullist.addEventListener('click',function(event){
    // console.log(event.target)// return html element
    // console.log(event.target.tagName)// return html element name in capital
    //console.log(event.target.className)// return html element class name 
     
    if(event.target.tagName === "BUTTON"){// written in capital
         
        if(event.target.className==="remove"){
             let li=event.target.parentNode
             let ui=li.parentNode
             ui.removeChild(li)

         }
         if(event.target.className==="up"){
             let li=event.target.parentNode
             let ul=li.parentNode
             let pre= li.previousElementSibling
             ul.insertBefore(li,pre)
         }
         if(event.target.className==="down"){
            let li=event.target.parentNode
            let ul=li.parentNode
            let pre= li.nextElementSibling
            ul.insertBefore(pre,li)

         }
       
        }
        

 })

button.addEventListener('click', function () {
    let text = input.value
    let file = document.createElement('li')
    file.textContent = text
    CreatButton(file)
    ullist.appendChild(file)
    input.value = " "
})
for (i = 0; i < lilist.length; i++) {
    CreatButton(lilist[i])
}

function CreatButton(li) {
    let remove = document.createElement("button")
    remove.textContent = ("remove")
    remove.classList = ("remove")
    li.appendChild(remove)

    let up = document.createElement("button")//<button></button>
    up.textContent = "up"//<button>up</button>
    up.classList = "up"//<button class="up">up</button>
    li.appendChild(up)

    let down = document.createElement("button")
    down.textContent = "down"
    down.classList = "down"
    li.appendChild(down)
}
