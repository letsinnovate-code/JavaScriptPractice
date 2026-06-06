let student = {
    fname:"Anil",
    lname:"Patel",
    class:"MCA",
    collegeName:"Shri Ram Institute of Technology",
    address:{
        houseNumber:34,
        village:"Suhas",
        dist:"Katni",
        state:"MP",
        pinCode:483330
    },
    hobbies:["coding","cricket"]
}
// print all the key and value pairs using for in loop
// for(let key in student){
//     console.log(key + ":" + student[key]);
    
    
// }

// for(let key in student.address){
//     console.log(key + ":" + student.address[key]);
    
// }

// check if the student object has a property fullname

console.log("fullname" in student);
console.log("fname" in student);

// change the fname Anil to Rahul

student.fname = "Rahul"

// remove the dist property

delete student.address.dist

// any new property to the student 

student.address.postOffice = "Kakrehta"
student.address.block = "Bahoriband"

// create a copy of student 


const newCopy = {
    ...student,
}
console.log(newCopy);

console.log(student);


// let newStudent = student


// newStudent.fname = "Rahul";

// console.log(newStudent);

// console.log(student);


// shallow copy 
// in this copy it will only apply in uper layer of objects but if we create another object inside the object then it will no copy it will act like a pointer to that object and 
// when we modify the object it will modify in both the objects

// let newStudent = {
//     ...student,
// }

// console.log(newStudent);


// newStudent.fname = "Rahul"
// newStudent.address.village = "Bahoriband"
// newStudent.hobbies = "running"

// console.log(newStudent);
// console.log(student);




// // Deep copy there are many ways to apply deep copy we use here string method 


// const deepCopy = JSON.stringify(student);

// console.log(deepCopy);

// const anotherStudent = JSON.parse(deepCopy)

// // console.log(anotherStudent);
// anotherStudent.address.village = "Jabalpur"


// console.log(anotherStudent);

// console.log(student);
// console.log(deepCopy);









