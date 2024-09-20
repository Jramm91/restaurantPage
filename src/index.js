import './styles.css';
import Logo from './logo.png';

import { createHTag, createParagraph } from './components';
import loadHome from './home';

function createHeader() {
  const header = document.createElement('header');
  const headerTitle = createHTag('h1', 'Hanguk Hot Chicken');
  header.appendChild(headerTitle);
  header.appendChild(createParagraph('Bold Heat, Korean Street Flavors'));
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  
  const navLogo = new Image();
  navLogo.src = Logo;
  navLogo.alt = "Chicken with flames, red background."

  const navBtnsContainer = document.createElement('div');
  navBtnsContainer.classList.add('nav-btns-container');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('nav-btns');
  homeBtn.innerText = 'Home';
  const aboutBtn = document.createElement('button');
  aboutBtn.classList.add('nav-btns');
  aboutBtn.innerText = 'About';
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-btns');
  menuBtn.innerText = 'Menu';
  const findUsBtn = document.createElement('button');
  findUsBtn.classList.add('nav-btns');
  findUsBtn.innerText = 'Find Us';
  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-btns');
  contactBtn.innerText = 'Contact';

  nav.appendChild(navLogo);
  nav.appendChild(navBtnsContainer);
  navBtnsContainer.appendChild(homeBtn);
  navBtnsContainer.appendChild(aboutBtn);
  navBtnsContainer.appendChild(menuBtn);
  navBtnsContainer.appendChild(findUsBtn);
  navBtnsContainer.appendChild(contactBtn);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function loadWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  loadHome();
}

loadWebsite();
