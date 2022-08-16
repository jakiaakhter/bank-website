document.getElementById('btn-withdraw').addEventListener('click' , function(){
    
    //step-2: get the 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountSring = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountSring);
    //step 3: 

const withdrawTotalElement= document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step-4 :
const currentWithdrawTotal = previousWithdrawTotal +newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

// step-5 :
const balanceTotalElement =document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
if(newWithdrawAmount>previousBalanceTotal){
    alert('Now My account is empty')

}
//step-6: calculate 
newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;


// step-7:
withdrawField.value= '';
})