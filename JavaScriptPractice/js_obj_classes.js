const obj = {
    fname : "Anil",
    lname : "Patel",

    getFullName : function (){
        return `${this.fname} ${this.lname}`
        
    },
    
}

// obj.__proto__= null
console.log(obj.__proto__);

const obj2 = {
    fname  : "Lalit",
    lname : "Lodhi",
    
}

obj2.__proto__ = obj


console.log(obj.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());



// in upper code we can see that there are so many problems i have created a two objects and i want to create same keys but i have to create manually every 
// every key in both the objects this is very time consuming and very hectic to create multiple object with the same properties 
// i want to fix this problem so i have to create a class object which will solve this problem

class Person {
    constructor(fname,lname) {
        this.fname = fname,
        this.lname = lname
        
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
        
    }
}

const p1 = new Person("Anil","Patel")
const p2 = new Person("Lalit","Patel")


console.log(p1.getFullName());
console.log(p2.getFullName());
console.log(p1.__proto__.__proto__);


// here we have created two object with the same properties by using parent class name Person 
// all the objects inherit all the properties and methods from the parent class Person

class Student {
    constructor(fname,lname,age,address){
        this.fname= fname,
        this.lname = lname,
        this.age = age,
        this.address = address

    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}
console.log(typeof Student)

const l = new Student('Lalit',"Patel",24,"Kuda,Bakal");

// console.log(l.age);
// console.log(l.address);
// console.log(l.getFullName());
// console.log(typeof l);



