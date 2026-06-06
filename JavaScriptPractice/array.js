 // declaration and initialization of an array
 
 // first
 let fruits = ["Apple","Banana","Cherry","Grapes"];


//  console.log(fruits);
//  console.log(typeof fruits);
//  console.log(fruits[0]);
//  console.log(fruits.length);
//  console.log(fruits.indexOf("Banana"));
//  console.log(fruits.indexOf("VAnana"));
//   fruits[0] = "Kiwi"
//  console.log(fruits.includes("Kiwi"));
//  console.log(fruits.includes("Banana"));
//  console.log(fruits);
 let index = fruits.indexOf("Banana")
//  let slicedValue = fruits.slice(index,3)
//  console.log(slicedValue);
 let spliceValue
 if(index !== -1){
    spliceValue = fruits.splice(index,2)
    
 }
console.log(fruits);

 console.log(spliceValue);
 
 
 

 

 
 let anotherFruits = new Array("Kiwi","Avacado","Dragon Fruits","Pineapple");
 let moreFruits = ["kela"]

 let allFruits = [...fruits,...anotherFruits,...moreFruits]
 console.log(allFruits);
 

//  console.log(anotherFruits)
//  console.log(typeof anotherFruits);
//  console.log(anotherFruits[0]);
//  console.log(anotherFruits.length);
//  console.log(anotherFruits.indexOf("Dragon Fruits"));
//  console.log(anotherFruits.indexOf("Banana"));
//  console.log(anotherFruits.includes("Kiwi"));
//  console.log(anotherFruits.includes("Banana"));
//  console.log(anotherFruits.map(fruit => fruit.toUpperCase()));
//  anotherFruits[0] = "Banana"
//  anotherFruits.push("Mango");
//  anotherFruits.unshift("new Fruit")
//  anotherFruits.shift()
//  const anotherArray = anotherFruits.join("--")
// //  anotherFruits.pop()
// //  anotherFruits.splice(2,2)
//  const newArray = anotherFruits.slice(2,4)
// const an = anotherFruits.filter((fruits)=> fruits.includes("n"))
// anotherFruits.sort()
//  console.log(anotherFruits);
//  console.log(newArray);
//  console.log(anotherArray);
//  console.log(an);
 
 
 
 
 
 
 
 
 
 
 

