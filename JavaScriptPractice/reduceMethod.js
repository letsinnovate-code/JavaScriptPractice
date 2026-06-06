// let userActivity = [
//     {user : "Anil Patel" , activityCount : 45},
//     {user : "Lalit Patel" , activityCount : 90},
//     {user : "Rahul Patel" , activityCount : 79},
//     {user : "Akhilesh Patel" , activityCount : 80},
// ]


// let mostActiveUser = userActivity.reduce((maxUser, user)=> {
//     return user.activityCount > maxUser.activityCount ? user : maxUser
//  })

// console.log(mostActiveUser);

// // sum of arr using reduce method
// const arr = [1,2,3,4]

// const arrSum = arr.reduce((initialVal, value)=>initialVal+value)

// console.log(arrSum);

// // multiply all numbers 

// const arrForMultiply = [1,2,3,4,5]

// const arrMultiply = arrForMultiply.reduce((acc,curr)=>acc*curr)

// console.log(arrMultiply);

// const maxArr = [34,87,89,99,47]

// const maxNumber = maxArr.reduce((maxValue , value)=> maxValue > value ? maxValue : value)
// const minNumber = maxArr.reduce((minValue , value)=> minValue < value ? minValue : value)

// console.log(maxNumber);
// console.log(minNumber);

// // count total characters in an array
// const arrChar = ["hi","hello","hey"]



// const totalChar = arrChar.reduce((count, character)=> count + character.length,0)


// console.log(totalChar);


// const flatArray = [[1, 2], [3, 4], [5]]


// const flattenArray = flatArray.reduce((acc, curr)=> acc.concat(curr),[])
// const flattened = flatArray.flat();
// console.log(flattenArray);
// console.log(flattened);


// // count occurrences of each elements



const fruits = ["apple", "banana", "apple", "orange", "banana"]
let count = 0
const occurrences = fruits.reduce((acc, value)=> {
    
        if(acc[value]){
            acc[value]++
        }
        else{
            acc[value] = 1
        }
        return acc
    }
    
   

   , {}  )

console.log(occurrences);

// // convert array to object using id
// const arr2 = [
//   { id: 1, name: "Lalit" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Anil" },
//   { id: 4, name: "Akkhi" }
// ]

// const convertedToObj = arr2.reduce((acc,curr)=>{
// if(curr){
//     acc[curr.id] = curr
// }
// return acc
// },{})

//  console.log(convertedToObj);
 

// // count total price of cart

// const priceArr = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 }
// ]

// const totalPrice = priceArr.reduce((acc, value)=> acc + value.price,0)

// console.log(totalPrice);

// //count even numbers

// const number = [1, 2, 3, 4, 6, 7] 

// const totalEvenNumber = number.reduce((acc, value)=>{
//     if(value%2==0){
//         acc++
//     }
//     return acc
// },0)


// console.log(totalEvenNumber);


// // group users according to age

// const user = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ]


