const bulb = document.getElementById("bulb")
const toggleBtn = document.getElementById("toggleBtn")


let flag = false;

toggleBtn.addEventListener("click",()=>{
    if(flag == false){

        flag = true ;
        bulb.style.backgroundColor = "yellow"
        toggleBtn.innerText = "Turn off"

    }
    else{
        flag = false ;
        bulb.style.backgroundColor = "white"
        toggleBtn.innerText = "Turn on"
    }
})