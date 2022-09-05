

const cardThank = document.querySelector('.card-thanks');
const card = document.querySelector('.card');
var result = document.querySelector('.result');
document.rateForm.onsubmit = function(event){
    event.preventDefault();
    cardThank.style.display="block";
    card.style.display="none";
    let ratesVal = document.rateForm.rates.value;
    result.innerHTML = 'You selected: '+ ratesVal +' from 5';
}