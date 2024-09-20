import { createHTag, createParagraph } from './components';
import Logo from './logo.png';

function createHeaderContent() {
  const headerContent = document.createElement('div');

  headerContent.appendChild(
    createParagraph('Bold Heat, Korean Street Flavors')
  );
  headerContent.appendChild(createHTag('h1', 'Hanguk Hot Chicken'));

  headerContent.appendChild(createNav());

  return headerContent;
}

function createNav() {
  const nav = document.createElement('nav');

  const navBtnsContainer = document.createElement('div');
  navBtnsContainer.classList.add('nav-btns-container');
  nav.appendChild(navBtnsContainer);

  const navLogo = new Image();
  navLogo.src = Logo;
  navLogo.alt = 'Chicken with flames, red background.';

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

function loadHeader() {
  const header = document.getElementById('header');
  header.innerHTML = '';
  header.appendChild(createHeaderContent());

  return header;
}

export default loadHeader;
