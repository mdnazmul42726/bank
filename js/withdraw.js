// get the withdraw amount from the withdraw input fild and converted string to number
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFild = document.getElementById('withdraw-fild');
    const previousWithdrawamountString = withdrawFild.value;
    const previousWithdrawAmount = parseFloat(previousWithdrawamountString);
    withdrawFild.value = '';
    // The condition that withdraw amount will not work if there is no number is written here
    if (isNaN(previousWithdrawAmount)) {
        alert('Invalid input');
        return
    }
    // get the previous withdraw amount and converted string to number
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);
    // get the previous balance
    const previousBlanceElemnt = document.getElementById('balance');
    const previousBlanceString = previousBlanceElemnt.innerText;
    const previousBlance = parseFloat(previousBlanceString);
    // It is checked here whether the withdrawal amount is more than the balance
    if (previousWithdrawAmount > previousBlance) {
        alert('Your account does not have enough balance');
        return;
    };
    // update the withdraw data
    const newWithdrawData = previousWithdrawAmount + previouswithdrawTotal;
    withdrawTotal.innerText = newWithdrawData;
    // update balance
    const newBalance = previousBlance - previousWithdrawAmount;
    previousBlanceElemnt.innerText = newBalance;

});