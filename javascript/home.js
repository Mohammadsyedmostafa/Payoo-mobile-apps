const pin = 1234
const transacitionData = []

// funtion for input value
function getInputNumber(id){
    const InputField = document.getElementById(id)
    const inputFieldValue = InputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
function inputInnerText(id){
    const inputInner = document.getElementById(id)
    const inputInnerValue = inputInner.innerText
    const inputInnerValueNumber = parseInt(inputInnerValue)
    return inputInnerValueNumber
}
// funtion to set InnerText
function setInnerTaxt(value){
    const availableBalanceElement = document.getElementById('availableBalance')
    availableBalanceElement.innerText = value
}

// Funtion to Toggol
function toggole(id){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}
// Funtion to toggol Button
function toggolButton(id){
    const formbtns = document.getElementsByClassName("form-btn")
    for(const btn of formbtns){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]")
        btn.classList.add("border-[#0808081a]")
    }
    document.getElementById(id).classList.remove("border-stone-300")
    document.getElementById(id).classList.add("border-[#0874f2]" , "bg-[#0874f20d]")

}


document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = getInputValue('bank')
    const accountNumber = getInputValue('account-number')
    const addAmount = getInputNumber('add-amount')
    const pinNumber = getInputNumber('pin-number')
    if(addAmount<=0){
        alert("Invalit Ammount")
    }
    console.log(bank,accountNumber,addAmount,pinNumber)
    const availableBalance = inputInnerText('availableBalance')
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
    setInnerTaxt(totalAvailableBalance)

    const data = {
        name:"Add Money",
        date: new Date().toLocaleTimeString()
    }
    transacitionData.push(data)
    console.log(transacitionData)
})


// cashout section

document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const withdrawAccountNumber = getInputValue('withdraw-account-number')
    const withdrawAddAmount = getInputNumber('withdraw-add-amount')
    const withdrawPinNumber = getInputNumber('withdraw-pin-number')
    console.log(withdrawAccountNumber,withdrawAddAmount,withdrawPinNumber)
    const availableBalance = inputInnerText('availableBalance')
    if(withdrawAddAmount<=0 || withdrawAddAmount>availableBalance){
        alert("Invalit Ammount")
    }
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
    setInnerTaxt(totalAvailableBalance)

    const data = {
        name:"Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transacitionData.push(data)
    console.log(transacitionData)
})


document.getElementById('transacition-botton').addEventListener('click', function(e){
    e.preventDefault()
    const transacitionMoney = document.getElementById('transacition-money')
    transacitionMoney.innerText = ""
    for(const data of transacitionData){
        const div = document.createElement('div')
        div.innerHTML = `
        <div>
            <div class="bg-white px-4 py-2 rounded-2xl mt-5 flex justify-between items-center">
                <div class="flex items-center">
                <div>
                    <img src="./images/wallet1.png" class="rounded-full bg-[#f4f5f6] p-2" alt="">
                    </div>
                    <div div class="ml-3">
                        <h1 class="font-medium text-sm">${data.name}</h1>
                        <p class="font-normal text-sm">${data.date}</p>
                    </div>
                    </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            </div>
        `
        transacitionMoney.appendChild(div)
    }
    
})

// toggoling

document.getElementById('add-money-botton').addEventListener('click',function(){
    toggole("add-money")
    toggolButton('add-money-botton')
})

document.getElementById('cash-out-botton').addEventListener('click',function(){
    toggole("cash-out")
    toggolButton('cash-out-botton')
})

document.getElementById('transfer-botton').addEventListener('click',function(){
    toggole("transfer-money")
    toggolButton('transfer-botton')
})
document.getElementById('bonus-botton').addEventListener('click',function(){
    toggole("bonus-money")
    toggolButton('bonus-botton')
})
document.getElementById('pay-botton').addEventListener('click',function(){
    toggole("pay-bill")
    toggolButton('pay-botton')
})
document.getElementById('transacition-botton').addEventListener('click',function(){
    toggole("transacition-money")
    toggolButton('transacition-botton')
})

