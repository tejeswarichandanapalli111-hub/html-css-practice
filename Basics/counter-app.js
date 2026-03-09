let count =0;
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const countDisplay = document.getElementById('count');

function updateDisplay(){
    countDisplay.innerText=count;
}
incrementBtn.addEventListener('click',()=>{
    count++;
    updateDisplay();
});
decrementBtn.addEventListener('click',()=>{
    count-=2;
    updateDisplay();
});
resetBtn.addEventListener('click',()=>{
    count=0;
    updateDisplay();
});