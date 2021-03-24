`use strict`;
import {homeContent} from './modules/homepage.js';
import {contactContent} from './modules/contact.js';
import {menuContent} from './modules/menu.js';


homeContent.headerCreator();
homeContent.aboutCreator();
homeContent.imageCreator()

let clear = function(){
    let elements = document.querySelectorAll(`.rmvElement`);
    elements.forEach(function(element){
        element.parentNode.removeChild(element);
    });
}

let footerCreator = (function(){
    let footer = document.createElement(`div`);
    footer.classList.add(`footer`);

    let content = document.querySelector(`#content`);
    content.appendChild(footer);

})();

let tabCreator = (function(){
    let homeBtn = document.createElement(`button`);
    homeBtn.classList.add(`tabBtns`);
    homeBtn.textContent = `Home Page`;
    homeBtn.addEventListener(`click`, function(){
        clear();
        homeContent.headerCreator();
        homeContent.aboutCreator();
    })

    let contactBtn = document.createElement(`button`);
    contactBtn.classList.add(`tabBtns`);
    contactBtn.textContent = `Contact`;
    contactBtn.addEventListener(`click`, function(){
        clear();
        contactContent.infoCreator();
    })

    let menuBtn = document.createElement(`button`);
    menuBtn.classList.add(`tabBtns`);
    menuBtn.textContent = `Menu`;
    menuBtn.addEventListener(`click`, function(){
        clear();
        menuContent.headerCreator();
        menuContent.burgerCreator();
        menuContent.waterCreator();
    })
    
    let footer = document.querySelector(`.footer`);
    footer.appendChild(homeBtn);
    footer.appendChild(contactBtn);
    footer.appendChild(menuBtn);

})();
