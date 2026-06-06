const arr = [5,7,4,5,3,5,3,6,7,5,8,9];


// arr.forEach(function(value,index){
//     console.log(`Multiplied by 4 in Value at index ${index} : ${value*4}`);
    
// })


if(!Array.prototype.myForEach){

    Array.prototype.myForEach = function(userFn){

        const userArr = this;

        for(let i = 0; i<this.length;i++){
            userFn(this[i],i)
        }
    }

}

// arr.myForEach(function(value,index){
//     console.log(`Value at index ${index} : ${value}`);


    
// })

// console.log(arr);


// const newArr = arr.map((value,index)=>{
//     return value*5
    
// })

// console.log(newArr);

// .map functionality , return new array , not modify original array ,iterate on each element , perform some operation in each element of an array

// polyfill of .map function


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        let result = [];

        for(let i = 0; i<this.length; i++){
           let value =  userFn(this[i],i)
            // result.push(userFn(this[i],i))
            result.push(value)
        }

        return result;

    }
}

const newArr = arr.myMap((value,index)=>{
    return value*100
    
})

console.log(newArr);


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        let result = []
        for(let i = 0;i<this.length;i++){

            if(userFn(this[i])){
            result.push(this[i])
            }
      

        }
        return result
    }
}
const newArr2 = arr.myFilter((value)=>{
    return value % 2 == 0
    
})

console.log(newArr2); 




let arr = [10, 5, 6, 8, 22, 24];

// let newArr = arr.map((value,index)=>{
//     return `At index ${index}: value ${value}`

// })

// console.log(newArr);

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
      let result = cb(this[i], i);
      newArr.push(result);
    }

    return newArr;
  };
}

let arr2 = arr.myMap((value, index) => `At index ${index} : Value ${value}`);
console.log(arr2);

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        newArr.push(this[i]);
      }
    }

    return newArr;
  };
}

let filteredArr = arr.myFilter((a) => a % 5 == 0);
console.log(filteredArr);



// reduce polyfill


if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb,initialValue){
         let acc= initialValue || this[0];

         let startIndex = initialValue ? 0 : 1

         for(let i =startIndex; i < this.length; i++){
            acc = cb(acc , this[i])
         }
         


    

        return acc
    }
}

let sum = arr.myReduce((acc,cur)=>acc+cur,8)
console.log(sum);
