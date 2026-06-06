let person1 = {
  name: "Anil Patel",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

let person2 = {
  name: "Rahul Patel",
};

// i have to print Hello Rahul Patel instead of Hello Anil Patel
// so there are two methods to print it
// first one is call() method  and second one is bind() method
// difference between call() and bind() are call will not return anything but bind will return function
// the main work of call and bind is to bind a context with the function
// person1.greet()
// person1.greet.call(person2)
// let fn = person1.greet.bind(person2)
// fn()

// now why we use and where we use bind and call

let person3 = {
  personName: "Golu Lodhi",
  age: 25,
  greet: function () {
    console.log(`Hello ${this.personName} and Your age is ${this.age}`);
  },
};

// first we call the greet function with setTimeout function without bind context
// person3.greet()
// setTimeout(person3.greet, 5 * 1000);

// now we call greet function bye using  bind and call method because when setTimeout function execute then function will execute after given time but 
// the object person3 will execute immediately so the context of the greet function will be undefined.
// to solve this problem we have use call and bind method to bind the context with greet function 


// setTimeout(()=>person3.greet.call(person3),5*1000)
// setTimeout(person3.greet.bind(person3),10*1000)






let user = { 
  name : "Anil Patel"
}

function show (age , city){
  console.log(`${this.name} ${age} ${city}`);
  
}
// call method execute immediatly  , do not return any function and  arguments are give as a comma separated 
show.call(user, 24, "Jabalpur")


// bind method do not execute immidiatly , it will return new function and arguments are given as a comma separated

let result = show.bind(user, 25, "Katni")

result()

// apply method execute immediately , it will not return  any function and arguments are given as an Array 


show.apply(user, [26,"Indore"])