import './styles.css';

import loadFooter from './footer';
import loadHeader from './header';
import loadHome from './home';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.setAttribute('id', 'header');
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  return footer;
}

function loadWebsite() {
  const content = document.getElementById('content');
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  loadHeader();
  loadHome();
  loadFooter();
}

loadWebsite();
