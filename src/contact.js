import { createHTag } from './components';

function createContact() {
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact');

  const heading = createHTag('h2', 'Get in Touch with Hanguk Hot Chicken!');

  const form = document.createElement('form');
  form.action = '#';
  form.method = 'POST';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name';
  nameLabel.setAttribute('for', 'name');

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.required = true;

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  emailLabel.setAttribute('for', 'email');

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.required = true;

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message';
  messageLabel.setAttribute('for', 'message');

  const messageInput = document.createElement('textarea');
  messageInput.id = 'message';
  messageInput.name = 'message';
  messageInput.required = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Send';

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);
  form.appendChild(submitButton);

  contactSection.appendChild(heading);
  contactSection.appendChild(form);

  return contactSection;
}

function loadContact() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(createContact());
}

export default loadContact;
