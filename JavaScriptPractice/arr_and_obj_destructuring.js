// let chaiRecipe = {
//     name: "Masala chai",
//     ingredients:{
//         teaLeaves:"Assam Tea",
//         milk:"Full Cream Milk",
//         sugar: "Brown Sugar",
//         spices: ["Daalchini","Ginger"]

//     },
//     instructions: " Boil water, add tea leaves, milk , and some sugar"

// }

// // access the object properties and methods

// chaiRecipe.name;
// chaiRecipe.ingredients;
// chaiRecipe.ingredients.teaLeaves;
// chaiRecipe.ingredients.milk;
// chaiRecipe.ingredients.sugar;
// chaiRecipe.ingredients.spices; 
// chaiRecipe.instructions;

// // this is how we can access the properties of an objects;


// // we can spread the objects in some other object 

// let updatedChaiRecipe = {
//     ...chaiRecipe,
//     instructions: " Boil water , add tea leaves , milk and add sugar with some love"
// }

// console.log(updatedChaiRecipe);
// console.log(chaiRecipe);

// // object destructuring 

// const  {name, instructions} = chaiRecipe;

// console.log(name);
// console.log(instructions);




// // array destructuring 



// const arr = ['Masala Tea', "Ginger Tea","Lemon Tea"]

// const [firstChai , secondChai] = arr

// console.log(firstChai);

// function preparingChai(type){
// let typeString = String(type)
//     if(typeString.toLocaleLowerCase() === "masala chai"){
//         console.log("Adding some spices to it");
        
//     } else {
//         console.log("Preparing regular chai");
        
//     }

// }


// preparingChai("MASALA CHAI")



// function trafficLight (color) {

//     let lightColor = String(color)

//     switch (lightColor.toLowerCase()){
//         case "red" : return "Stop";
//         break;
//         case "green": return "Go";
//         break;
//         case "yellow" : return "Wait";
//         break;
//         default:"Invalid Entries"
//     }

// }

// let result = trafficLight("RED")


// console.log(result);


function truthyFalsyValue(value){
    if(value){
        console.log("Truthy");
        
    }
    else{
        console.log("Falsy");
        
    }
}

truthyFalsyValue(1)
truthyFalsyValue(0)
truthyFalsyValue("Anil")
truthyFalsyValue("")
truthyFalsyValue([])
truthyFalsyValue([1,4,5])
truthyFalsyValue({})
truthyFalsyValue(null)
truthyFalsyValue(undefined)
truthyFalsyValue(true)
truthyFalsyValue(false)
truthyFalsyValue()

