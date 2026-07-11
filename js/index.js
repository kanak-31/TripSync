const fabButton = document.querySelector('#btn-new-plan');
const overlay = document.querySelector('.overlay');
const newCard = document.querySelector('.new-card');
const plansGrid = document.querySelector('.plans-grid');

fabButton.addEventListener('click', function(){
    overlay.classList.remove('hidden');
})

newCard.addEventListener('submit', function(){
    event.preventDefault();
})