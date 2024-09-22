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

    if (isNaN(inputAmount)){
        alert("Failed To Add Money")
        return;
    }
    

    if (inputPin === 1234){
        const balance = getTextValue('balance');
        const newBalance = balance + inputAmount;
        document.getElementById('balance').innerText = newBalance;

        // Create div for transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${inputAmount} Tk. New Balance: ${newBalance} Tk.`
        p.classList.add("p-3", "text-lg", "bg-blue-200");
        document.getElementById('history-container').appendChild(p);
        
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

    if (isNaN(inputAmount)){
        alert("Failed To Add Money")
        return;
    }

    if (inputPin === 1234){
        const balance = getTextValue('balance');

        if (inputAmount > balance){
            alert("You Do Not Have Money")
            return;
        }

        const newBalance = balance -inputAmount;
        document.getElementById('balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Cash Out: ${inputAmount} | New Balance: ${newBalance}`
        p.classList.add("p-3", "text-lg", "bg-red-200")
        document.getElementById('history-container').appendChild(p);
    }
    else {
        alert('Wrong PIN, Try Again.')
    }


    // console.log("Cash Out button")
})