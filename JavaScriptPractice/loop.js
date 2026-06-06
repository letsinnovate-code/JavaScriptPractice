const teas = [
  "Masala Chai",
  "Green Tea",
  "Black Tea",
  "Herbal Tea",
  "Chamomile Tea",
  "Oolong Tea",
  "White Tea",
  "Earl Grey Tea",
  "Matcha Tea",
  "Lemon Tea",
  "Ginger Tea",
  "Mint Tea",
  "Jasmine Tea",
  "Hibiscus Tea",
  "Tulsi Tea",
  "Darjeeling Tea",
  "Assam Tea",
  "Peach Tea",
  "Iced Tea",
  "Kashmiri Kahwa",
];

// for loop

// starting variable
// limit of the iteration
// increment/decrement

// for(let i =0; i<teas.length;i++){

//     console.log(`Teas at index ${i} : ${teas[i]}`)

// }

const arr = [7, 4, 9, 5, 3, 5, 4, 5];
const arr2 = [9, 4, 5, 6, 4, 3, 5];

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arraySum(arr));
console.log(arraySum(arr2));

function shinyDiamondRug(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 2 * i - 1; j++) {
      result += "*";
    }
    console.log(result);
    result = "";
  }
}

shinyDiamondRug(4);

// let arr8 = []
// function arrFunction(n){
//   for(let i = 0;i<n;i++){
//   for(let j=0;j<=i;j++){

//     arr8.push(j)

//   }
// }
// return arr8;
// }

// console.log(arrFunction(4));

let str = "banana";

// str.toUpperCase();
let newStr = str.replace("a","o")
let newStr2 = str.replace("banana","Anil")

console.log(newStr);
console.log(newStr2);

