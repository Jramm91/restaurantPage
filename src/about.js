import { createHTag, createParagraph } from './components';

function createAbout() {
  const about = document.createElement('section');
  about.classList.add('about');

  const heading = createHTag('h2', 'About Us');

  const description = createParagraph(
    'Hanguk Hot Chicken was born out of a love for bold Korean street food and the desire to share it with the world. We take pride in blending traditional Korean recipes with a modern twist.'
  );

  const missionStatement = createParagraph("We’re committed to quality, flavor, and that perfect crispy crunch. Whether you’re a spice lover or prefer something milder, we’ve got something for everyone. Come experience the fiery spirit of Korea in every bite!")

  about.appendChild(heading);
  about.appendChild(description);
  about.appendChild(missionStatement);

  return about;
}

function loadAbout() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createAbout());
}

export default loadAbout;
