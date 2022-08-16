//step 1 :add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click' , function(){


 const depositField = document.getElementById('deposit-field') ;
 const newDepositAmountString = depositField.value ;
const newDepositAmount = parseFloat(newDepositAmountString);

 const depositTotalElement = document.getElementById('deposit-total');
 const previosDepositTotalString  = depositTotalElement.innerText;
 const previosDepositTotal = parseFloat(previosDepositTotalString);
const currentDepositTotal= previosDepositTotal + newDepositAmount;

 depositTotalElement.innerText= currentDepositTotal ;

 // step 5:get balance total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//step-6 : 
const currentBalanceTotal = previousBalanceTotal +newDepositAmount;
balanceTotalElement.innerText=currentBalanceTotal

 //step 7: remove the deposit field
 depositField.value= '';
})