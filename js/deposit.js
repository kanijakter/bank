// step-1:add event listener to the deposit button 

document.getElementById('btn-deposit').addEventListener('click',function()

{
    // step 2:get the deposite amount from the deposit input field 
    // for input field use .value to the valueinside the input field 

    const depositField=document.getElementById('deposit-field');
    const depositAmount=depositField.value;
//   step-3:get the current deposit total
//   for non-input (element other than input,textarea) use innerText to get the text
   const depositeTotalElement =document.getElementById

})