import loadAbout from './about';
import { createHTag, createParagraph } from './components';
import loadHome from './home';
import Logo from './logo.png';
import loadMenu from './menu';

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
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const aboutBtn = document.createElement('button');
  aboutBtn.classList.add('nav-btns');
  aboutBtn.innerText = 'About';
  aboutBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(aboutBtn);
    loadAbout();
  });

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-btns');
  menuBtn.innerText = 'Menu';
  menuBtn.addEventListener('click', (e) =>{
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuBtn);
    loadMenu();
  });
  
  const findUsBtn = document.createElement('button');
  findUsBtn.classList.add('nav-btns');
  findUsBtn.innerText = 'Find Us';
  findUsBtn.addEventListener('click', (e) =>{
    if (e.target.classList.contains('active')) return;
    setActiveButton(findUsBtn);
    loadFind();
  });

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-btns');
  contactBtn.innerText = 'Contact';
  contactBtn.addEventListener('click', (e) =>{
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactBtn);
    loadContact();
  });

  nav.appendChild(navLogo);
  nav.appendChild(navBtnsContainer);
  navBtnsContainer.appendChild(homeBtn);
  navBtnsContainer.appendChild(aboutBtn);
  navBtnsContainer.appendChild(menuBtn);
  navBtnsContainer.appendChild(findUsBtn);
  navBtnsContainer.appendChild(contactBtn);

  return nav;
}
function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav-btns');

  buttons.forEach((button) => {
    if (button !==this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function loadHeader() {
  const header = document.querySelector('header');
  header.innerHTML = '';
  header.appendChild(createHeaderContent());

  return header;
}


export default loadHeader;
