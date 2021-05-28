// function 

// function without parameter and without return type 


function add(){
    console.log(12+12)
}

add()
add()
add()

// function with paramter and without return 

// function add(x,y){  // parameter

//     console.log(x+y)


// }

// add(12,13)  // arguments
// add(23,25)

// function with paramter and return  type

// 100  show    ... 100 


// function add(x,y){

//     return x+y

// }

// let b = add(12,14)
// console.log(b)

// console.log(b+20)
// console.log(b+45)

// function witout paramter with return type 


// function Pivalue(){

//     return 3.14


// }
// let r = Pivalue()
// console.log(3.14)

// ------------------



// function add(x,y){     // parameters

       
//     console.log(x+y)    // statements 


// } 

// add(12,13)

// function add(x,y){     // parameters
//     return x + y    // statements 
// } 

// let d = add(12,13)
// console.log(d)
// console.log(d+10)  // 35



// // function sub(x,y){

// //     undefined * 12

// // }

// // sub(10,20)


// console.log(console.log(2+4))


// function add(x,y){
//     console.log(x+y)
// }

// let c = add(3,5)
// console.log(c)


// let r = alert('hello')
// console.log(r)


// let f = console.log(3+7)
// console.log(f)


//function - how action function performs 

// return type 


// let , const , var 


//  let firstName = "neha"
//  console.log(typeof firstName)

//  let r = firstName.length
//  console.log(typeof r)




//  let a = firstName.toUpperCase()
//  console.log(a)
//  console.log(typeof a)


// let b = a.toLowerCase()
// console.log(b)
// console.log(typeof b)



// let secondName = "sonali"
// let ra = secondName.toUpperCase().toLowerCase().length 
// console.log(typeof ra)
// console.log(ra)



// 
// let thirdName = "ninad"
// thirdName = "vijeet"
// console.log(thirdName)


// // const fourthName = "ninad"
// // fourthName = "vijeet"
// // console.log(fourthName)


var fifthName = "harshad"
fifthName = "Harshad K"
console.log(fifthName)


// let const var -- block 



// ES6 let and const blocked scope



// {

//     let x = 10
//     console.log(x) // 10


// }

// console.log(x) // undefined


// {

//     const y = 10
//     console.log(y) // 10

// }

//console.log(y) // undefined

// {
//     var d = 10
//     console.log(d)
// }

// console.log(d)

// let and const --- blocked scope



// {

//     let r = 23 
//     console.log(r)  // 23


// }

// console.log(r)



// {

//     const r = 23 
//     console.log(r)  // 23


// }

// console.log(r)

// {
//     var d = 23
//     console.log(d)

// }

// console.log(d)



// let , const , var --->  Assigment


// let r = 10 
// r = 30
// console.log(r)


// var ra = 45
// ra = 444
// console.log(444)


// const rrr = 45
// rrr = 56
// console.log(rrr)



//scope

// let const



// {

//     let r = 4444 
//     console.log(r)
// }

// console.log(r)  // undefined


// {

//     const r = 4444 
//     console.log(r)
// }

// console.log(r)  // undefined



// var 



// {

//  var r = 10
//  console.log(r)

// }
// console.log(r)



// Hositing
// var is functioned scoped


// var r = 34
// function add(){
//     var r = 90
//     console.log(r)  // 90

//     {
//         console.log(r)  // 90

//     }
    
// }
// add()
// console.log(r)  // 34




// var r = 34
// function add(){
    
//     r = 90
//     console.log(r)  // 90

//     {
        
//         console.log(r)  // 90

//     }
    
// }
// add()
// console.log(r)  // 90





// var r = 34
// function add(){

//     r = 90
//     console.log(r)   // 90
//     {
//         let r = 566
//         console.log(r)   // 566

//     }
    
//     console.log(r)  // 90
// }
// add()
// console.log(r)  // 90



// var r = 34
// function add(){

//     var r = 90
//     console.log(r)   // 90
//     {
//         let r = 566
//         console.log(r)   // 566

//     }
    
//     console.log(r)  // 90
// }
// add()
// console.log(r)  // 34

// -------------------------->
// var r = 34
// function add(){

//     let r = 90
//     console.log(r)    // 90
//     {
//         let r = 566
//         console.log(r)    // 566

//         var y = 33

//     }

//     console.log(y) //33
//     console.log(r)   // 90
// }
// add()
// console.log(r)   // 34