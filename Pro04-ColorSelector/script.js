const colorInput = document.querySelector("#colorInput")
const colorCode = document.querySelector("#colorCode")
const copyBtn = document.querySelector("#copyBtn")
const complimentaryContainer  = document.querySelector("#complimentaryContainer")
const copyComplimentaryColorBtn = document.querySelector("#copyComplimentaryColor")
const  saveColorBtn = document.querySelector("#saveColorBtn")
const favoritesContainer = document.querySelector("#favoritesContainer")
const compColorContainer = document.querySelector(".compColor")
const colorContainer = document.querySelector(".colorContainer")

colorInput.addEventListener("input",()=>{
    const color = colorInput.value
    console.log(color);
    displayColor(color)
    ComplimentaryColor()
    
    
})

function displayColor(color){
    colorCode.innerText = color
}

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(colorCode.innerText)
    .then(()=>{
        alert("Copy to clipboard")
    })
    copyBtn.style.backgroundColor = colorCode.innerText
})

function ComplimentaryColor(){
    const Color = colorCode.innerText.slice(1)
    
    const base = parseInt(Color , 16)
    const compColor = (0xFFFFFF ^ base).toString(16)
    complimentaryContainer.innerText = `#${compColor}`
    compColorContainer.style.backgroundColor = `#${compColor}`
    colorContainer.style.backgroundColor = `#${compColor}`


}

copyComplimentaryColorBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(complimentaryContainer.innerText)
    .then(()=>{
        alert("Copy to clipboard")
    })
    copyComplimentaryColorBtn.style.backgroundColor = complimentaryContainer.innerText
})

