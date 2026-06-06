const createButton = document.querySelector(".create-btn")
const select = document.querySelector(".select-container")
const lowerContainer = document.querySelector(".lower-container")
const body= document.querySelector("body")
console.log(createButton);

createButton.addEventListener("click",()=>{

    const selectValue = select.value

    const newButton = document.createElement("button")

    newButton.textContent = selectValue
    newButton.classList.add("new-btn")
    console.log(newButton);
    

    lowerContainer.appendChild(newButton)

    newButton.addEventListener("click",()=>{
        body.style.backgroundColor = selectValue
    })
    
})

