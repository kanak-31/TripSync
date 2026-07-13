const fabButton = document.querySelector('#btn-new-plan');
const overlay = document.querySelector('.overlay');
const newCard = document.querySelector('.new-card');
const plansGrid = document.querySelector('.plans-grid');
const newEvent = document.querySelector('#event-name');
const date = document.querySelector('#date');
const member = document.querySelector('#member');
const eventBadge = document.querySelector('#category')

fabButton.addEventListener('click', function(){
    overlay.classList.remove('hidden');
})

newCard.addEventListener('submit', function(e){
    e.preventDefault();
    const eventName = newEvent.value;
    const eventDate = date.value;
    const memberCount = member.value;
    const badge = eventBadge.value;

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
    h3.textContent = eventName;

    infoDiv.appendChild(h3);

    const dateOfEvent = document.createElement('p');
    dateOfEvent.classList.add('event-date');
    dateOfEvent.textContent = eventDate;

    infoDiv.appendChild(dateOfEvent);

    const numberOfMember = document.createElement('p');
    numberOfMember.classList.add('group-members');
    numberOfMember.textContent = `${memberCount} Members`;

    infoDiv.appendChild(numberOfMember);

    const badgeSpan = document.createElement('span');
    badgeSpan.classList.add('event-badge');
    badgeSpan.textContent = badge;

    infoDiv.appendChild(badgeSpan);

    plansGrid.appendChild(mainDiv);

    overlay.classList.add('hidden');

    let savedCards = JSON.parse(localStorage.getItem('cards')) || [ ];

    const cardData = {
         eventName: eventName, 
         eventDate: eventDate, 
         memberCount: memberCount, 
         badge: badge 
    }

    savedCards.push(cardData);

    localStorage.setItem('cards',JSON.stringify(savedCards));

    newCard.reset();
})