`use strict`;

let homeContent = (function(){
    let content = document.querySelector(`#content`);

    let headerCreator = function(){
        let header = document.createElement(`div`);

        header.classList.add(`header`);
        header.classList.add(`rmvElement`);
        header.textContent = `Thunder Burger`;
        
        content.appendChild(header);
    };

    let aboutCreator = function(){
        let about = document.createElement(`div`);

        about.classList.add(`about`);
        about.classList.add(`rmvElement`);
        about.textContent = `Lightning Burger is a fast food restaurant in Konohagakure. In Naruto Shinden: Parent and Child Day, Lightning Burgers are one of the few junk foods that Kiba Inuzuka will eat, because they contain no additives. Boruto Uzumaki and the other genin of his former Academy class regularly eat here.`;

        content.appendChild(about);
    };

    let imageCreator = function(){
        let img = document.createElement(`img`);

        img.classList.add(`homePicture`);
        img.classList.add(`rmvElement`);
        img.src = `ThunderBurgerShop.jpeg`;

       content.appendChild(img);
    };

    return {
        headerCreator,
        aboutCreator,
        imageCreator,
    }
})();



export {homeContent};