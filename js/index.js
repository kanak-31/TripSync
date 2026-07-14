const fabButton = document.querySelector('#btn-new-plan');
const overlay = document.querySelector('.overlay');
const newCard = document.querySelector('.new-card');
const plansGrid = document.querySelector('.plans-grid');
const newEvent = document.querySelector('#event-name');
const date = document.querySelector('#date');
const member = document.querySelector('#member');
const eventBadge = document.querySelector('#category')

const createCardElement = function(cardData){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card');

    const divBanner = document.createElement('div');
    divBanner.classList.add('card-banner');

    mainDiv.appendChild(divBanner);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('card-info');

    mainDiv.appendChild(infoDiv);

    const h3 = document.createElement('h3');
    h3.classList.add('event-name');
    h3.textContent = cardData.eventName;

    infoDiv.appendChild(h3);

    const dateOfEvent = document.createElement('p');
    dateOfEvent.classList.add('event-date');
    dateOfEvent.textContent = cardData.eventDate;

    infoDiv.appendChild(dateOfEvent);

    const numberOfMember = document.createElement('p');
    numberOfMember.classList.add('group-members');
    numberOfMember.textContent = `${cardData.memberCount} Members`;

    infoDiv.appendChild(numberOfMember);

    const badgeSpan = document.createElement('span');
    badgeSpan.classList.add('event-badge');
    badgeSpan.textContent = cardData.badge;

    infoDiv.appendChild(badgeSpan);

    return mainDiv;
}

fabButton.addEventListener('click', function(){
    overlay.classList.remove('hidden');
})

newCard.addEventListener('submit', function(e){
    e.preventDefault();
    const eventName = newEvent.value;
    const eventDate = date.value;
    const memberCount = member.value;
    const badge = eventBadge.value;

    const cardData = {
         eventName: eventName, 
         eventDate: eventDate, 
         memberCount: memberCount, 
         badge: badge 
    }

    const newCardElement = createCardElement(cardData);

    let savedCards = JSON.parse(localStorage.getItem('cards')) || [ ];

    savedCards.push(cardData);

    plansGrid.appendChild(newCardElement);

    overlay.classList.add('hidden');

    localStorage.setItem('cards',JSON.stringify(savedCards));

    newCard.reset();
})

let allSaveCards = JSON.parse(localStorage.getItem('cards')) || [ ];

for(const item of allSaveCards){
    const newCardElement = createCardElement(item);
    plansGrid.appendChild(newCardElement);
}