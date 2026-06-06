// global scope 

// let fname = "Anil"
// // 

// // function scope
// function user(){
//     console.log(`Hello ${fname}`);
    
// }

// user()


// global scope 
// let fname = "Anil"
// // 

// // function scope
// function user(){

//     // inner function
//     return function (){
//     console.log(`Hello ${fname}`);

//     }
// }

// let userData = user()
// userData()


let fname = "Anil"
// 

// function scope
function user(){

    let lname = "Patel"

    // inner function it is a closure function of user function
    // closure function (function binded by its lexical scope)
     function  inner(){
        let age = 26
        // anotherInner function which is a closure function of inner function 
        // closure function (function binded by its lexical scope)
    function anotherInner(){
        console.log(`Hello ${fname} ${lname} Your age is : ${age}`);
    }
    anotherInner()

    }
    inner()
}

user()

// as we can see that we are consoling the output inside the anotherInner function which is inside the inner function and
// inner function is inside the user function and the value are initialize fname initialized in global scope and  
// lname is initialize inside the user function and age is initialize inside the inner function but the anotherInner function
// access all the variable which are not initialize inside the anotherInner function 
// this happen because of closures 
//