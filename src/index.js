import "./styles.css";

import loadHome from "./home";

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

function loadWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createMain());

    loadHome();
}

loadWebsite();