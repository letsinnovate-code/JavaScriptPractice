const billAmount = document.getElementById("bill-amount");
const tipPercentage = document.getElementById("tip-percentage");
const calculateButton = document.getElementById("calculate-btn");

const totalPersons = document.getElementById("total-persons")

const totalTip = document.getElementById("total-tip")
const totalAmount = document.getElementById("total-amount")
const perPersonAmount = document.getElementById("per-person-amount")


calculateButton.addEventListener("click",()=>{

    const tipAmount = (billAmount.value*tipPercentage.value)/100
    const tipPerPerson = tipAmount/totalPersons.value
    
    totalTip.innerText = tipAmount.toFixed(2)
    totalAmount.innerText = billAmount.value
    perPersonAmount.textContent = tipPerPerson.toFixed(2)

})

