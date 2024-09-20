const { createButton } = require("./components");

function Nav() {
    const nav = document.createElement('nav');
    
    const navBtnsContainer = document.createElement('div');
    navBtnsContainer.classList.add('nav-btns-container');
    nav.appendChild(navBtnsContainer);

    navBtnsContainer.appendChild(createButton("Home"));
    navBtnsContainer.appendChild(createButton("About"));
    navBtnsContainer.appendChild(createButton("Menu"));
    navBtnsContainer.appendChild(createButton("Find Us"));
    navBtnsContainer.appendChild(createButton("Contact"));

    return nav;
}

export default Nav;