const arr = [4,5,6,7,8,8,9]

// const deepCopy = JSON.stringify(arr)

// console.log(deepCopy);
// 

// Deep copy


// const newArr = JSON.parse(deepCopy)

// console.log(newArr);

// newArr.push(10)
// console.log(arr);
// console.log(newArr);



//shallow copy
// const arr2 = arr

// arr2.push(20)

// console.log(arr)
// console.log(arr2);
// ;
 

// deep copy


// const arr3 = structuredClone(arr)

// console.log(arr3);


// arr3.push(30)

// console.log(arr);
// console.log(arr3);


let obj = {
    fname : "Anil",
    lname : "Patel"
}

// Shallow copy in objects 

// let obj1 = obj

// console.log(obj)
// console.log(obj1);


// obj.fname = "Rahul"
// console.log(obj)
// console.log(obj1);


// deep copy in objects 




// type one


// let obj2 = structuredClone(obj)

// console.log(obj)
// console.log(obj2);

// obj2.fname = "lalit"

// console.log(obj)
// console.log(obj2);




// type two


let objString = JSON.stringify(obj)
let parseObj = JSON.parse(objString)

console.log(obj)
console.log(parseObj);

parseObj.fname = "lalit"

console.log(obj)
console.log(parseObj);