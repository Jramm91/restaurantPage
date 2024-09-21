/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nfunction createAbout() {\n  var about = document.createElement('section');\n  about.classList.add('about');\n  var heading = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h2', 'About Us');\n  var description = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('Hanguk Hot Chicken was born out of a love for bold Korean street food and the desire to share it with the world. We take pride in blending traditional Korean recipes with a modern twist.');\n  var missionStatement = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"We’re committed to quality, flavor, and that perfect crispy crunch. Whether you’re a spice lover or prefer something milder, we’ve got something for everyone. Come experience the fiery spirit of Korea in every bite!\");\n  about.appendChild(heading);\n  about.appendChild(description);\n  about.appendChild(missionStatement);\n  return about;\n}\nfunction loadAbout() {\n  var main = document.querySelector('main');\n  main.textContent = '';\n  main.appendChild(createAbout());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://my-webpack-project/./src/about.js?");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createFeature: () => (/* binding */ createFeature),\n/* harmony export */   createHTag: () => (/* binding */ createHTag),\n/* harmony export */   createLink: () => (/* binding */ createLink),\n/* harmony export */   createParagraph: () => (/* binding */ createParagraph)\n/* harmony export */ });\nfunction createParagraph(text) {\n  var paragraph = document.createElement('p');\n  paragraph.textContent = text;\n  return paragraph;\n}\nfunction createHTag(type, text) {\n  var header = document.createElement(type);\n  header.textContent = text;\n  return header;\n}\nfunction createLink(href, text) {\n  var link = document.createElement('a');\n  link.classList.add('hero-link');\n  link.href = href;\n  link.textContent = text;\n  return link;\n}\nfunction createFeature(headerText, paragraphText) {\n  var feature = document.createElement('div');\n  feature.classList.add('feature');\n  feature.appendChild(createHTag('h3', headerText));\n  feature.appendChild(createParagraph(paragraphText));\n  return feature;\n}\nfunction createButton(btnText) {\n  var button = document.createElement('button');\n  button.textContent = btnText;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nfunction createContact() {\n  var contactSection = document.createElement('section');\n  contactSection.classList.add('contact');\n  var heading = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h2', 'Get in Touch with Hanguk Hot Chicken!');\n  var form = document.createElement('form');\n  form.action = '#';\n  form.method = 'POST';\n  var nameLabel = document.createElement('label');\n  nameLabel.textContent = 'Name';\n  nameLabel.setAttribute('for', 'name');\n  var nameInput = document.createElement('input');\n  nameInput.type = 'text';\n  nameInput.id = 'name';\n  nameInput.name = 'name';\n  nameInput.required = true;\n  var emailLabel = document.createElement('label');\n  emailLabel.textContent = 'Email';\n  emailLabel.setAttribute('for', 'email');\n  var emailInput = document.createElement('input');\n  emailInput.type = 'email';\n  emailInput.id = 'email';\n  emailInput.name = 'email';\n  emailInput.required = true;\n  var messageLabel = document.createElement('label');\n  messageLabel.textContent = 'Message';\n  messageLabel.setAttribute('for', 'message');\n  var messageInput = document.createElement('textarea');\n  messageInput.id = 'message';\n  messageInput.name = 'message';\n  messageInput.required = true;\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = 'Send';\n  form.appendChild(nameLabel);\n  form.appendChild(nameInput);\n  form.appendChild(emailLabel);\n  form.appendChild(emailInput);\n  form.appendChild(messageLabel);\n  form.appendChild(messageInput);\n  form.appendChild(submitButton);\n  contactSection.appendChild(heading);\n  contactSection.appendChild(form);\n  return contactSection;\n}\nfunction loadContact() {\n  var main = document.querySelector('main');\n  main.innerHTML = '';\n  main.appendChild(createContact());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://my-webpack-project/./src/contact.js?");

/***/ }),

/***/ "./src/findUs.js":
/*!***********************!*\
  !*** ./src/findUs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nfunction createFindUs() {\n  var findUsSection = document.createElement('section');\n  findUsSection.classList.add('find-us');\n  var heading = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h2', 'Track Our Truck - Find Hanguk Hot Chicken Near You!');\n  var locationsList = document.createElement('ul');\n  var locations = [{\n    day: 'Monday',\n    location: 'Downtown at Main St.'\n  }, {\n    day: 'Wednesday',\n    location: 'Uptown Market'\n  }, {\n    day: 'Friday',\n    location: 'Night Food Festival'\n  }];\n  locations.forEach(function (loc) {\n    var listItem = document.createElement('li');\n    listItem.innerHTML = \"<strong>\".concat(loc.day, \":</strong> \").concat(loc.location);\n    locationsList.appendChild(listItem);\n  });\n  var bookEvent = document.createElement('a');\n  bookEvent.textContent = 'Book Our Truck for Events';\n  bookEvent.href = '#contact';\n  bookEvent.classList.add('btn');\n  findUsSection.appendChild(heading);\n  findUsSection.appendChild(locationsList);\n  findUsSection.appendChild(bookEvent);\n  return findUsSection;\n}\nfunction loadFindUs() {\n  var main = document.querySelector('main');\n  main.innerHTML = '';\n  main.appendChild(createFindUs());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFindUs);\n\n//# sourceURL=webpack://my-webpack-project/./src/findUs.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nfunction createFooterContent() {\n  var footerContent = document.createElement('div');\n  var p = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('Follow the Heat!');\n  var socialLinks = document.createElement('ul');\n  socialLinks.classList.add('social-links');\n  var facebook = document.createElement('li');\n  facebook.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createLink)('#', 'Facebook'));\n  var instagram = document.createElement('li');\n  instagram.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createLink)('#', 'Instagram'));\n  var X = document.createElement('li');\n  X.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createLink)('#', 'X'));\n  var form = document.createElement('form');\n  form.action = \"#\";\n  form.method = \"POST\";\n  form.classList.add(\"newsletter-signup\");\n  var label = document.createElement('label');\n  label.setAttribute('for', 'email-newsletter');\n  label.textContent = \"Subscribe for exlusive offers and updates!\";\n  var input = document.createElement('input');\n  input.type = \"email\";\n  input.name = \"email-newsletter\";\n  input.id = \"email-newsletter\";\n  input.required = true;\n  var btn = document.createElement('button');\n  btn.type = \"submit\";\n  btn.innerText = \"Subscribe\";\n  footerContent.appendChild(p);\n  footerContent.appendChild(socialLinks);\n  socialLinks.appendChild(facebook);\n  socialLinks.appendChild(instagram);\n  socialLinks.appendChild(X);\n  footerContent.appendChild(form);\n  form.appendChild(label);\n  form.appendChild(input);\n  form.appendChild(btn);\n  return footerContent;\n}\nfunction loadFooter() {\n  var footer = document.querySelector('footer');\n  footer.appendChild(createFooterContent());\n  return footer;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);\n\n//# sourceURL=webpack://my-webpack-project/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _findUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findUs */ \"./src/findUs.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\n\nfunction createHeaderContent() {\n  var headerContent = document.createElement('div');\n  headerContent.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_1__.createParagraph)('Bold Heat, Korean Street Flavors'));\n  headerContent.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_1__.createHTag)('h1', 'Hanguk Hot Chicken'));\n  headerContent.appendChild(createNav());\n  return headerContent;\n}\nfunction createNav() {\n  var nav = document.createElement('nav');\n  var navBtnsContainer = document.createElement('div');\n  navBtnsContainer.classList.add('nav-btns-container');\n  nav.appendChild(navBtnsContainer);\n  var navLogo = new Image();\n  navLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_5__;\n  navLogo.alt = 'Chicken with flames, red background.';\n  var homeBtn = document.createElement('button');\n  homeBtn.classList.add('nav-btns');\n  homeBtn.innerText = 'Home';\n  homeBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(homeBtn);\n    (0,_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  });\n  var aboutBtn = document.createElement('button');\n  aboutBtn.classList.add('nav-btns');\n  aboutBtn.innerText = 'About';\n  aboutBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(aboutBtn);\n    (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  var menuBtn = document.createElement('button');\n  menuBtn.classList.add('nav-btns');\n  menuBtn.innerText = 'Menu';\n  menuBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(menuBtn);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  });\n  var findUsBtn = document.createElement('button');\n  findUsBtn.classList.add('nav-btns');\n  findUsBtn.innerText = 'Find Us';\n  findUsBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(findUsBtn);\n    (0,_findUs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n  var contactBtn = document.createElement('button');\n  contactBtn.classList.add('nav-btns');\n  contactBtn.innerText = 'Contact';\n  contactBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(contactBtn);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n  nav.appendChild(navLogo);\n  nav.appendChild(navBtnsContainer);\n  navBtnsContainer.appendChild(homeBtn);\n  navBtnsContainer.appendChild(aboutBtn);\n  navBtnsContainer.appendChild(menuBtn);\n  navBtnsContainer.appendChild(findUsBtn);\n  navBtnsContainer.appendChild(contactBtn);\n  return nav;\n}\nfunction setActiveButton(button) {\n  var _this = this;\n  var buttons = document.querySelectorAll('.nav-btns');\n  buttons.forEach(function (button) {\n    if (button !== _this) {\n      button.classList.remove('active');\n    }\n  });\n  button.classList.add('active');\n}\nfunction loadHeader() {\n  var header = document.querySelector('header');\n  header.innerHTML = '';\n  header.appendChild(createHeaderContent());\n  return header;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n//# sourceURL=webpack://my-webpack-project/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nfunction createHome() {\n  var home = document.createElement('section');\n  home.classList.add('home');\n  var hero = document.createElement('div');\n  hero.classList.add('hero');\n  home.appendChild(hero);\n  hero.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h2', 'Welcome to Hanguk Hot Chicken!'));\n  hero.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('Savor the fiery flavors of Korea, where every bite brings the perfect crunch with a kick of spice. Are you ready to turn up the heat?'));\n  hero.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createLink)('#menu', 'Order Now'));\n  hero.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createLink)('#locations', 'Find Us'));\n  var features = document.createElement('div');\n  features.classList.add('features');\n  home.appendChild(features);\n  features.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFeature)('Our Story', 'At Hanguk Hot Chicken, we’re all about bringing the heart of Korea’s vibrant street food culture to you! Inspired by the bold flavors of Korean fried chicken and the fiery spice of gochujang, our crispy, flavorful wings and sides are made to fire up your taste buds.'));\n  features.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFeature)('Our Signature Heat', 'Choose your heat level, from Mild Seoul to Extreme Gochu – no matter what, you’ll experience authentic, bold Korean flavors in every bite.'));\n  features.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFeature)('What Sets Us Apart', 'Our chicken is double-fried for that unbeatable crunch and coated with special house-made sauces, infused with rich, spicy, and savory notes. Only fresh, high-quality ingredients are used.'));\n  return home;\n}\nfunction loadHome() {\n  var main = document.querySelector('main');\n  main.textContent = '';\n  main.appendChild(createHome());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://my-webpack-project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nfunction createHeader() {\n  var header = document.createElement('header');\n  return header;\n}\nfunction createMain() {\n  var main = document.createElement('main');\n  return main;\n}\nfunction createFooter() {\n  var footer = document.createElement('footer');\n  return footer;\n}\nfunction loadWebsite() {\n  var body = document.querySelector('body');\n  var header = createHeader();\n  var main = createMain();\n  var footer = createFooter();\n  body.appendChild(header);\n  body.appendChild(main);\n  body.appendChild(footer);\n  (0,_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\nloadWebsite();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nfunction createMenu() {\n  var menu = document.createElement('section');\n  menu.classList.add('menu');\n  var heading = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h2', 'Explore the Heat');\n  var wingsHeading = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h3', 'Wings & Chicken');\n  var wingsList = document.createElement('ul');\n  var wingsItems = [{\n    name: 'Mild Seoul',\n    description: 'Lightly spicy, perfectly seasoned.'\n  }, {\n    name: 'Gochujang Glory',\n    description: 'The classic sweet and spicy Korean flavor.'\n  }, {\n    name: 'Extreme Gochu',\n    description: 'Extra fiery for the bold!'\n  }];\n  wingsItems.forEach(function (item) {\n    var listItem = document.createElement('li');\n    listItem.innerHTML = \"<strong>\".concat(item.name, \"</strong> - \").concat(item.description);\n    wingsList.appendChild(listItem);\n  });\n  var sidesHeading = (0,_components__WEBPACK_IMPORTED_MODULE_0__.createHTag)('h3', 'Sides & More');\n  var sidesList = document.createElement('ul');\n  var sidesItems = [{\n    name: 'Kimchi Fries',\n    description: 'Crispy fries topped with kimchi, cheese, and secret sauce.'\n  }, {\n    name: 'Bulgogi Bites',\n    description: 'Juicy beef bulgogi sliders with spicy mayo.'\n  }, {\n    name: 'Ssam Wraps',\n    description: 'Lettuce wraps with crispy chicken, rice, and spicy sauces.'\n  }];\n  sidesItems.forEach(function (item) {\n    var listItem = document.createElement('li');\n    listItem.innerHTML = \"<strong>\".concat(item.name, \"</strong> - \").concat(item.description);\n    sidesList.appendChild(listItem);\n  });\n  menu.appendChild(heading);\n  menu.appendChild(wingsHeading);\n  menu.appendChild(wingsList);\n  menu.appendChild(sidesHeading);\n  menu.appendChild(sidesList);\n  return menu;\n}\nfunction loadMenu() {\n  var main = document.querySelector('main');\n  main.textContent = '';\n  main.appendChild(createMenu());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://my-webpack-project/./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n   margin: 0;\r\n   padding: 0;\r\n   box-sizing: border-box; \r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color: #fff;\r\n    color: #333;\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nmain {\r\n    width: 90%;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\nheader {\r\n    background-color: #ff5733;\r\n    color: white;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 2rem;\r\n}\r\n\r\nheader p {\r\n    font-size: 1.2rem;\r\n    margin: 10px 0;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\nnav > img {\r\n    width: 100px;\r\n}\r\n\r\n#nav-btn-container {\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: space-evenly;\r\n}\r\n\r\nsection {\r\n    padding: 50px 0;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n\r\np , ul {\r\n    font-size: 1rem;\r\n    color: #555;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.features {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n\r\n.feature {\r\n    width: 30%;\r\n    background-color: #f4f4f4;\r\n    padding: 20px;\r\n    margin: 10px 0;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.feature h3 {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 15px;\r\n}\r\n\r\na, button {\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    margin: 10px 0;\r\n    background-color: #ff5733;\r\n    color: white;\r\n    text-decoration: none;\r\n    font-size: 1rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\na:hover, button:hover {\r\n    background-color: #e74c3c;\r\n}\r\n\r\nform {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\ninput, textarea {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n    width: 100%;\r\n    padding: 12px;\r\n}\r\n\r\nfooter {\r\n    background-color: #333;\r\n    color: white;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n}\r\n\r\nfooter p {\r\n    font-size: 1rem;\r\n    color: white;\r\n}\r\n\r\n.social-links {\r\n    display: flex;\r\n    justify-content: center;\r\n    list-style: none;\r\n    \r\n}\r\n\r\n.social-links li {\r\n    margin: 0 10px;\r\n}\r\n\r\n.social-links li a {\r\n    color: white;\r\n    text-decoration: none;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nfooter form {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\nfooter input[type=\"email\"] {\r\n    width: calc(100% - 120px);\r\n    padding: 10px;\r\n}\r\n\r\nfooter button {\r\n    width: 100px;\r\n    padding: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    \r\n    .features {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .feature {\r\n        width: 90%;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    nav ul {\r\n        flex-direction: column;\r\n    }\r\n\r\n    nav ul li {\r\n        margin: 10px 0;\r\n    }\r\n\r\n    header h1 {\r\n        font-size: 1.8rem;\r\n    }\r\n\r\n    header p {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    section {\r\n        padding: 30px 0;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.8rem;\r\n    }\r\n\r\n    ul li {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    footer form {\r\n        flex-direction: column;\r\n    }\r\n\r\n    footer input[type=\"email\"], footer button {\r\n        width: 100%;\r\n        margin: 10px 0;\r\n        border-radius: 5px;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c50e45d6a42e8043270.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;