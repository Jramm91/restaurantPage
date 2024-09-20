function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function createHTag(type, text) {
  const header = document.createElement(type);
  header.textContent = text;
  return header;
}

function createLink(href, text) {
  const link = document.createElement('a');
  link.classList.add('hero-link');
  link.href = href;
  link.textContent = text;
  return link;
}

function createFeature(headerText, paragraphText) {
  const feature = document.createElement('div');
  feature.classList.add('feature');
  feature.appendChild(createHTag('h3', headerText));
  feature.appendChild(createParagraph(paragraphText));
  return feature;
}

function createButton(btnText){
    const button = document.createElement('button');
    button.textContent = btnText;
}

export { createFeature, createHTag, createLink, createParagraph, createButton };
