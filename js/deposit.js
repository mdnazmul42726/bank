// add event lestener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get the deposit amount from the deposit input filed
    const depositFild = document.getElementById('deposit-fild');
    const newDepositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if(isNaN(newDepositAmount)){
        alert('invalid input');
        return
    }
    // get the previous deposit amount total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // update the deposit data
    const newDepositData = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositData;
    // update the total balance
    const balanceElement = document.getElementById('balance');
    const previousBalanceString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const newBalance = previousBalance + newDepositAmount;
    balanceElement.innerText = newBalance;
    // clear the deposit input filed
    depositFild.value = '';


});