import { createHeader, createParagraph, createLink, createFeature} from './components';

function createHome() {
  const home = document.createElement('section');
  home.classList.add('home');

  const hero = document.createElement('div');
  hero.classList.add('hero');

  home.appendChild(hero);
  hero.appendChild(createHeader("h2", 'Welcome to Hanguk Hot Chicken!'));
  hero.appendChild(
    createParagraph(
      'Savor the fiery flavors of Korea, where every bite brings the perfect crunch with a kick of spice. Are you ready to turn up the heat?'
    )
  );
  hero.appendChild(createLink("#menu", "Order Now"));
  hero.appendChild(createLink("#locations", "Find Us"));

  const features = document.createElement('div');
  features.classList.add('features');
  home.appendChild(features);
  features.appendChild(createFeature("Our Story", "At Hanguk Hot Chicken, we’re all about bringing the heart of Korea’s vibrant street food culture to you! Inspired by the bold flavors of Korean fried chicken and the fiery spice of gochujang, our crispy, flavorful wings and sides are made to fire up your taste buds."));
  features.appendChild(createFeature("Our Signature Heat", "Choose your heat level, from Mild Seoul to Extreme Gochu – no matter what, you’ll experience authentic, bold Korean flavors in every bite."));
  features.appendChild(createFeature("What Sets Us Apart", "Our chicken is double-fried for that unbeatable crunch and coated with special house-made sauces, infused with rich, spicy, and savory notes. Only fresh, high-quality ingredients are used."));



  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
