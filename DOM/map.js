// map and object
// object key always in string but in map key is -- sring,boolian,array,obj
let k={
    fullname:"akshay pardeshi",
    city:'bhokardan'
}// is called object
//retrive
console.log(k.fullname)
console.log(k['city'])
//add
k.education="engineer"
console.log(k)
//update
k.city="pune"
console.log(k)
//delete
delete k.education
console.log(k)
//MAP
// let a=new Map()// predefined data type// calling map
// let b=new Array()//calling array
// let c=new String("")//calling string
// map cannot stored index value
let a=new Map()

// jar map madhe kahi value takayachi asel tar set method ahe
console.log(a)//Map(0) {}
let aa=["surname","education"]
let bb={admin:"chinmay",leader:"sanjay"}

//1] set() in map  -- to add key value in map return all map
a.set("name","akshay")//key value usind string
a.set(true,"married")//key value usind boolian
a.set(aa,["pardeshi",'engineer'])//key value usind array
a.set(bb,"employee")////key value usind obj
console.log(a)

//2]get() in map return key chi value

console.log(a.get(true))
console.log(a.get("name"))
console.log(a.get(aa))// jar apan array chi value kadhli tar undefined yeil
             // tya sathi array la eka var madhe stored karave lagel same obj pan
console.log(a.get(bb))

//3].values() return all values in map
console.log(a.values())
//4].keys() retuen all keys in map
console.log(a.keys())
//5].entries return all key value in map
console.log(a.entries())


// to set more than one key value 

let asp=new Map([
    ["admin","akshay"],
    ["teacher","chinmay"],
    ["student","girls"]
])// array(keys and values) passes constuctor
console.log(asp)

for(let key of asp.keys()){
    console.log(key)
}

for(let values of asp.values()){
    console.log(values)
}
for(let [key,values] of asp.entries()){
    console.log([key,values])
}
// size property
console.log(asp.size)
// clear // without deleting deta stucture only blank map
//asp.clear()

//console.log(asp)//Map(0) {}

asp.delete('student')
console.log(asp)

