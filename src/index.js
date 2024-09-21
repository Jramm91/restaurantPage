import './styles.css';

import loadFooter from './footer';
import loadHeader from './header';
import loadHome from './home';

function createHeader() {
  const header = document.createElement('header');
  return header;
}

function createMain() {
  const main = document.createElement('main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  return footer;
}

function loadWebsite() {
  const body = document.querySelector('body');
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);

  loadHeader();
  loadHome();
  loadFooter();
}

loadWebsite();
