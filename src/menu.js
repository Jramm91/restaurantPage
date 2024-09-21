import { createHTag, createLink, createParagraph } from './components';

function createMenu() {
  const menu = document.createElement('section');
  menu.classList.add('menu');

  const heading = createHTag('h2', 'Explore the Heat');
  const wingsHeading = createHTag('h3', 'Wings & Chicken');

  const wingsList = document.createElement('ul');
  const wingsItems = [
    { name: 'Mild Seoul', description: 'Lightly spicy, perfectly seasoned.' },
    { name: 'Gochujang Glory', description: 'The classic sweet and spicy Korean flavor.' },
    { name: 'Extreme Gochu', description: 'Extra fiery for the bold!' }
  ];

  wingsItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${item.name}</strong> - ${item.description}`;
    wingsList.appendChild(listItem);
  });

  const sidesHeading = createHTag('h3', 'Sides & More');

  const sidesList = document.createElement('ul');
  const sidesItems = [
    { name: 'Kimchi Fries', description: 'Crispy fries topped with kimchi, cheese, and secret sauce.' },
    { name: 'Bulgogi Bites', description: 'Juicy beef bulgogi sliders with spicy mayo.' },
    { name: 'Ssam Wraps', description: 'Lettuce wraps with crispy chicken, rice, and spicy sauces.' }
  ];

  sidesItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${item.name}</strong> - ${item.description}`;
    sidesList.appendChild(listItem);
  });


  menu.appendChild(heading);
  menu.appendChild(wingsHeading);
  menu.appendChild(wingsList);
  menu.appendChild(sidesHeading);
  menu.appendChild(sidesList);

  return menu;
}

function loadMenu() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
