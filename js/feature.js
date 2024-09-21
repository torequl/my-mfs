function showSectionByID(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}



document.getElementById('add-money-button').addEventListener('click', function(){
    showSectionByID('add-money-form');
})

document.getElementById('cash-out-button').addEventListener('click', function(){
    showSectionByID('cash-out-form');
})

document.getElementById('transaction-btn').addEventListener('click', function(){
    showSectionByID('transaction-history');
})





