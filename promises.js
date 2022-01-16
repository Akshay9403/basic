// let student = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }
// student.data.forEach(function (el) {
//     document.write(`<h1>${el.id}<h1>`)
//     document.write(`<h1>${el.last_name}<h1>`)
//     document.write(`<h1>${el.first_name}<h1>`)
//     document.write(`<h1>${el.email}<h1>`)
//     document.write(`<img src=${el.avatar}>`)
// })


//atual api hit

// var request = new Request('https://reqres.in/api/users?page=2', {
//     method: 'GET',
//     headers: new Headers({
//         'Accept': 'application/json',

//     })
// });

// fetch(request)
//     .then((response) => response.json())
//     .then((responseJson) => {
//         responseJson.data.forEach(function (el) {
//             document.write(`<h1>${el.id}<h1>`)
//             document.write(`<h1>${el.last_name}<h1>`)
//             document.write(`<h1>${el.first_name}<h1>`)
//             document.write(`<h1>${el.email}<h1>`)
//             document.write(`<img src=${el.avatar}>`)
//         })
// })


//promisses
// condition, consume
let asp=new Promise(function(resolve,reject){
    let number=[11,22,33,44,54]
    let numbers=[-11,-22,-33,-44]
    let x=10
    let y=20

    if(x==y){
        resolve(number)
    }
    else{
        reject(numbers)
    }

})

//asp.then(fn,fn)
asp.then(function(a){
    consolelog(a)
},function(b){
    console.log(b)
})

let asp1=new Promise(function(resolve,reject){
    let number1=[11,22,33,44,54]
    let numbers1=[-11,-22,-33,-44]
    let x1=10
    let y1=10

    if(x1==y1){
        resolve(number1)
    }
    else{
        reject(numbers1)
    }

})

asp1.then(function(a1){
    console.log(a1)
},function(b1){
    console.log(b1)
})

//.catch--error manage

// let asp2=new Promise(function(resolve,reject){
//     let number2=[11,22,33,44,54]
//     let numbers2=[-11,-22,-33,-44]
//     let x2=10
//     let y2=10

//     if(x2==y2){
//         resolve(number2)
//     }
//     else{
//         reject(numbers2)
//     }

// })

// asp2.then(function(a2){
//     console.log(a2)
// })
// .catch(function(b2){
//     console.log(b2)
// })

// sucess zalyavar value return karu shakto

let asp2=new Promise(function(resolve,reject){
    let number2=[11,22,33,44,54]
    let numbers2=[-11,-22,-33,-44]
    let x2=10
    let y2=10

    if(x2==y2){
        resolve(number2)
    }
    else{
        reject(numbers2)
    }

})

asp2.then(function(a2){
    console.log(a2)
    return a2[1]
}).then((s)=>{
    console.log(s)
})
.catch(function(b2){
    console.log(b2)
})