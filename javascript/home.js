const pin = "1234"

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


// cashout section

document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const withdrawAccountNumber = document.getElementById('withdraw-account-number').value

    const withdrawAddAmount = parseInt(document.getElementById('withdraw-add-amount').value)

    const withdrawPinNumber = document.getElementById('withdraw-pin-number').value
    console.log(withdrawAccountNumber,withdrawAddAmount,withdrawPinNumber)

    const availableBalance = parseInt(document.getElementById('availableBalance').innerText)
    console.log(availableBalance)
    
    if(withdrawAccountNumber.length <11){
        alert("Pleace Valit Account Number")
        return;
    }
    if(withdrawPinNumber !== pin){
        alert("Invalit Your Pin")
        return;
    }

    const totalAvailableBalance = availableBalance - withdrawAddAmount
    document.getElementById('availableBalance').innerText = totalAvailableBalance
})


// toggoling

document.getElementById('add-money-botton').addEventListener('click',function(){
    document.getElementById('cash-out').style.display ="none"
    document.getElementById('add-money').style.display ="block"
})

document.getElementById('cash-out-botton').addEventListener('click',function(){
    document.getElementById('add-money').style.display ="none"
    document.getElementById('cash-out').style.display ="block"
})