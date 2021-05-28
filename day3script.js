// let , const , var  assignment
// let ,const ,var - let and const



{

    {
        const r = 34
        console.log(r)
    }
    r = 55 // global
    console.log(r) // undefined


}

// console.log(r)


// let r = 10

// {

//     r = 55

// }

// console.log(r) // 55


// let e = 10 
// var y = 10
// const u = 344

// function add(){
//     let e = 45
//     console.log(e) // 45
//     {
//         e = 50
//         console.log(e)  //50
//     }

//     y = 30 

//     {
//         console.log(y) // 30
//     }

//     //u = 30 // ---error

//     {
//         const u = 34
//         console.log(u) 
//     }

//     {
//         let y = 45
//         console.log(y) // 45

//     }


// }

// add()

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// function declartion 


// function add(x,y,z){

//     console.log(x+y)  // 
//     console.log(x+y+z)
//     console.log(x)
//     console.log(y)
//     console.log("hello")
//     //console.log(u)
//     return x+y+z


// }
// add(10,15,30)




// function sub(a,b){

//       console.log(a+b)
//       console.log(a*b)
//       return a+b

// }
// sub(13,13)



// // return is the last stament inside a function ??,

// function add(x,y,z){

//     console.log(x+y)  // 
//     console.log(x+y+z)
//     console.log(x)
//     console.log(y)
//     console.log("hello")
//     return x+y+z
//     console.log('Hello')


// }
// let d = add(10,15,30)
// console.log(d)


// function --- 3 types 
//1) function declaration 

// 2) function expression

// 3) arrow function 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function declartion 


// function add(x, y) {
//     console.log(x + y)
//     return x + y
// }

// let f = add(12, 13)
// console.log(f)



// function cal(a, b) {
//     console.log(a + b)
//     return a + b
// }
// let c = cal(1, 1)
// console.log(c)





// function expression 

//      12+3+14 --------  29 



// let add = function (x,y){
//     console.log(x+y)
//     return x + y 
// }

// let f = add(12,13)
// console.log(f)


// arrow function 


// let add =  (x,y) => {
//     console.log(x+y)
//     return x + y 
// }

// let f = add(12,13)
// console.log(f)


// -------------------------------------------------------->


// function sub(){

//     return 7+9

// }



// var sub = function(){

//     return 7+9

// }

// sub()




// var sub = ()=> {

//     return 7+9

// }

// sub()


// let e = (x) => x+6
// let rr = e(3)
// console.log(rr)


// let e = (x,y) => {

//     console.log(x+y)
//     return x+6

// }
// let rr = e(3,3)
// console.log(rr)


// function -------------> 

// passing function as a parameter to another function


// let c = function (x, y) {
//     console.log(x + y) // 25
//     return x + y
// }

// c(10,13)
// c - > 

// function (x, y) {
//     console.log(x + y) // 25
//     return x + y
// }


//e-// function (x, y) {
//     console.log(x + y) // 25
//     return x + y
// }

//function as a parameter to another function



// function sub(e){

//     console.log(e)

//     return e(14,15)

// }
// let r = sub(c)
// console.log(r)















// // let d =  function (x, y) {
// //     console.log(x + y)
// //     return x + y
// // }



// function add(d){
//     console.log(d)
//     d(10,13)
// }
// add(c)