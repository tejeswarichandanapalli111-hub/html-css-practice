const num1=document.querySelector('#num1');
const num2=document.querySelector('#num2');
const result=document.querySelector('#result');

const addBtn=document.querySelector('#addBtn');
const subBtn=document.querySelector('#subBtn');

addBtn.addEventListener('click',()=>{
    const value1=Number(num1.value);
    const value2=Number(num2.value);
    const sum=value1+value2;
    result.innerText=sum;
});
subBtn.addEventListener('click',()=>{
    const value1=Number(num1.value);
    const value2=Number(num2.value);
    const difference=value1-value2;
    result.innerText=difference;
});
mulBtn.addEventListener('click',()=>{
    const value1=Number(num1.value);
    const value2=Number(num2.value);
    const product=value1*value2;
    result.innerText=product;
});
divBtn.addEventListener('click',()=>{
    const value1=Number(num1.value);
    const value2=Number(num2.value);
    if(value2!==0){
        const quotient=value1/value2;
        result.innerText=quotient;
    }else{
        result.innerText="Cannot divide by zero";
    }
});
