const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

const clearBtn = document.getElementById("clear-btn");
const deleteBtn = document.getElementById("delete-btn");
const equalsBtn = document.getElementById("equals-btn");



numberButtons.forEach((items,index)=>{
    items.addEventListener("click",()=>{
    display.value += items.textContent
    })
    

})

operatorButtons.forEach((items,index)=>{
    items.addEventListener("click",()=>{
        
      display.value += items.dataset.value
    
    })
})

equalsBtn.addEventListener("click",()=>{
    // const inputValue = String(display.value)
    
   
   display.value  = eval(display.value)
    
    

    
    
})


clearBtn.addEventListener("click",()=>{
  
    display.value = ""
})
deleteBtn.addEventListener("click",()=>{
    display.value = display.value.slice(0,-1)
})