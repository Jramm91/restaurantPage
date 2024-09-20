import { createLink, createParagraph } from './components';

function createFooterContent() {
  const footer = document.querySelector('footer');

  const p = createParagraph('Follow the Heat!');

  const socialLinks = document.createElement('ul');
  socialLinks.classList.add('social-links');

  const facebook = document.createElement('li');
  facebook.appendChild(createLink('#', 'Facebook'));
  const instagram = document.createElement('li');
  instagram.appendChild(createLink('#', 'Instagram'));
  const X = document.createElement('li');
  X.appendChild(createLink('#', 'X'));

  const form = document.createElement('form');
  form.action = "#";
  form.method = "POST";
  form.classList.add("newsletter-signup");

  const label = document.createElement('label');
  label.setAttribute('for','email-newsletter');
  label.textContent = "Subscribe for exlusive offers and updates!"

  const input = document.createElement('input');
  input.type = "email";
  input.name = "email-newsletter";
  input.id = "email-newsletter";
  input.required = true;

  const btn = document.createElement('button');
  btn.type = "submit";
  btn.innerText = "Subscribe"


  footer.appendChild(p);
  footer.appendChild(socialLinks);
  socialLinks.appendChild(facebook);
  socialLinks.appendChild(instagram);
  socialLinks.appendChild(X);
  footer.appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(btn);

  return footer;
}

export default createFooterContent;
