const input = document.getElementById("input");

function timer() {
  let inputValue = parseInt(input.value);

  const display = document.querySelector("#display-field");

  if (isNaN(inputValue)) {
    display.innerText = "This is not a Number";
    return;
  }

  if (inputValue <= 0) {
    display.textContent = `Enter valid value`;
    return;
  }
let isPaused = false
  let interval = setInterval(() => {

    if(isPaused) return
    inputValue--;
    

    display.textContent = `Time Remaining : ${inputValue} Seconds`;
    if (inputValue <= 0) {
      clearInterval(interval);

      // clearTimeout(interval)
      display.textContent = `Times Up⏰`;
    }
  }, 1000);

  const pauseBtn = document.getElementById("pause");

  pauseBtn.addEventListener("click", () => {
    console.log("Button Clicked");

  isPaused = true
    
  });

    const resumeBtn = document.getElementById("resume")

  resumeBtn.addEventListener("click",()=>{
    console.log("Resume Button Clicked");
    isPaused = false
  })
}

const timerBtn = document.querySelector("#start-btn");

timerBtn.addEventListener("click", timer);
