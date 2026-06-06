const quotes = [
  "Success begins where excuses end.",
  "Small steps every day lead to big results.",
  "Believe in yourself even when no one else does.",
  "Discipline will take you places motivation cannot.",
  "Dream big, start small, act now.",
  "Your future is created by what you do today.",
  "Stay focused and never stop learning.",
  "Hard work beats talent when talent doesn't work hard.",
  "Every expert was once a beginner.",
  "Progress is better than perfection.",
  "Don't wait for opportunity, create it.",
  "The best investment is in yourself.",
  "Consistency turns goals into achievements.",
  "Failure is a lesson, not a destination.",
  "Keep moving forward no matter the pace.",
  "Success is built one habit at a time.",
  "Your only limit is your mindset.",
  "Take the risk or lose the chance.",
  "Growth starts outside your comfort zone.",
  "Great things take time and patience.",
  "You are stronger than your doubts.",
  "Focus on solutions, not problems.",
  "Every day is a new opportunity to improve.",
  "Action creates momentum.",
  "The harder the struggle, the greater the victory.",
  "Learn, adapt, and keep going.",
  "Confidence comes from preparation.",
  "Make today count.",
  "Success follows persistent effort.",
  "Never let fear make your decisions.",
  "Your attitude determines your direction.",
  "Challenges reveal your true potential.",
  "Stay hungry for knowledge.",
  "Don't quit before the breakthrough.",
  "Winners are ordinary people with extraordinary persistence.",
  "Every accomplishment starts with a decision.",
  "Keep your goals bigger than your excuses.",
  "Success is earned, not given.",
  "Be patient, your time will come.",
  "Turn obstacles into opportunities.",
  "The journey is worth the effort.",
  "Stay committed to your vision.",
  "Growth requires courage.",
  "Difficult roads often lead to beautiful destinations.",
  "Work hard in silence and let success speak.",
  "Your effort today shapes tomorrow.",
  "Be fearless in the pursuit of your goals.",
  "Keep learning because life never stops teaching.",
  "Success is the sum of daily efforts.",
  "Don't compare your chapter one to someone else's chapter twenty.",
  "Every setback is a setup for a comeback.",
  "The best way to predict the future is to create it.",
  "Keep showing up for yourself.",
  "Stay positive and work hard.",
  "Focus on progress, not perfection.",
  "You are capable of amazing things.",
  "The only impossible journey is the one you never begin.",
  "Believe, achieve, repeat.",
  "Your dreams deserve your effort.",
  "Success starts with self-belief.",
  "Push yourself because no one else can do it for you.",
  "Stay determined even when it's difficult.",
  "The grind today brings the glory tomorrow.",
  "Success loves preparation.",
  "Take one more step when others stop.",
  "Keep building even when no one is watching.",
  "Mistakes are proof that you're trying.",
  "Your potential is endless.",
  "Be the reason you succeed.",
  "Great achievements require great commitment.",
  "Keep your eyes on the goal.",
  "Success grows from consistency.",
  "Work until your results introduce you.",
  "Stay disciplined and trust the process.",
  "The best time to start was yesterday; the next best time is now.",
  "Keep chasing progress every day.",
  "Turn your dreams into plans.",
  "Strength comes from overcoming challenges.",
  "Believe in the power of persistence.",
  "Nothing changes until you take action.",
  "Success is a marathon, not a sprint.",
  "Your mindset shapes your reality.",
  "Be proud of how far you've come.",
  "Keep climbing; the view is worth it.",
  "Never underestimate your own potential.",
  "Every effort counts.",
  "Stay focused on what matters most.",
  "You become what you repeatedly do.",
  "The difference is in the dedication.",
  "Success belongs to those who don't give up.",
  "Keep improving one day at a time.",
  "Your journey is unique; own it.",
  "Stay resilient through every challenge.",
  "Dream, believe, achieve.",
  "The best version of you is still ahead.",
  "Turn determination into achievement.",
  "Keep going; you're closer than you think.",
  "Success starts with showing up.",
  "Be relentless in pursuit of your goals.",
  "Every day is another chance to grow."
];


const display = document.getElementById("content")
const quotesBtn = document.getElementById("getQuotesBtn")
const copyQuotes = document.getElementById("copyQuotes")



function motivationalQuotes(){
const randomIndex = Math.floor(Math.random()*quotes.length)
const randomQuotes = quotes[randomIndex]
    display.textContent = randomQuotes
    


}
function copyQuotesfn(){
    navigator.clipboard.writeText(display.innerText)
    .then(()=>{
        alert('Copied');
    })
}

copyQuotes.addEventListener("click",copyQuotesfn)
quotesBtn.addEventListener("click",motivationalQuotes)