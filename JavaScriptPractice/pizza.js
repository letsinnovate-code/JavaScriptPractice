
let pizzaSize;
function pizzaDelivery(totalGuest){

    if(totalGuest>0 && totalGuest<=2){
       return pizzaSize = "Small"
    }
    else if(totalGuest<=5){
      return  pizzaSize = "Medium"
    }
else {
   return pizzaSize = "Large"
}

}

console.log(pizzaDelivery(5));


const result = pizzaDelivery(2)

console.log(result);

