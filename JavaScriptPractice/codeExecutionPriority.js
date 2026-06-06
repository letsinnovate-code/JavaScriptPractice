console.log("Hello Anil");

function greet (name) {
    console.log(`Hello ${name}`);
    
}
greet("Rahul")
 


setTimeout(function () {
    return console.log("After 5 sec");
    
},5*1000)


Promise.resolve().then(()=>console.log("Promise resolveed"))

setTimeout(()=>console.log("after 2 sec"),2*1000);
