// cash-out-form
// add-money-form
// add-money-button
// cash-out-button

document.getElementById('add-money-button').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})

document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})

