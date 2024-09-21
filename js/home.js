// Get Input Value function

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// Add Money Button Event

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputAmount = getInputValue('add-money-input');
    const inputPin = getInputValue('pin-number-input');
    

    if (inputPin === 1234){
        const balance = getTextValue('balance');
        const newBalance = balance + inputAmount;
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Wrong PIN, Try Again.')
    }
})

// Cash Out Button Event Handler

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = getInputValue('cash-out-input');
    const inputPin = getInputValue('cash-out-pin');

    if (inputPin === 1234){
        const balance = getTextValue('balance');
        const newBalance = balance -inputAmount;
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Wrong PIN, Try Again.')
    }


    // console.log("Cash Out button")
})