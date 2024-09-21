import { createHTag } from './components';

function createFindUs() {
  const findUsSection = document.createElement('section');
  findUsSection.classList.add('find-us');

  const heading = createHTag(
    'h2',
    'Track Our Truck - Find Hanguk Hot Chicken Near You!'
  );

  const locationsList = document.createElement('ul');
  const locations = [
    { day: 'Monday', location: 'Downtown at Main St.' },
    { day: 'Wednesday', location: 'Uptown Market' },
    { day: 'Friday', location: 'Night Food Festival' },
  ];

  locations.forEach((loc) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${loc.day}:</strong> ${loc.location}`;
    locationsList.appendChild(listItem);
  });

  const bookEvent = document.createElement('a');
  bookEvent.textContent = 'Book Our Truck for Events';
  bookEvent.href = '#contact';
  bookEvent.classList.add('btn');

  findUsSection.appendChild(heading);
  findUsSection.appendChild(locationsList);
  findUsSection.appendChild(bookEvent);

  return findUsSection;
}

function loadFindUs() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(createFindUs());
}

export default loadFindUs;
