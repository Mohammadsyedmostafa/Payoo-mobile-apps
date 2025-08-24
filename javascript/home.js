const pin = 1234

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value

    const accountNumber = document.getElementById('account-number').value

    const addAmount = parseInt(document.getElementById('add-amount').value)

    const pinNumber = document.getElementById('pin-number').value
    console.log(bank,accountNumber,addAmount,pinNumber)

    const availableBalance = parseInt(document.getElementById('availableBalance').innerText)
    console.log(availableBalance)

    if(accountNumber.length <11){
        alert("Please Valite Account Number")
        return;
    }

    if(pinNumber !== pin){
        alert("Invalit Your Pin")
        return;
    }

    const totalAvailableBalance = addAmount + availableBalance

    document.getElementById('availableBalance').innerText = totalAvailableBalance
})