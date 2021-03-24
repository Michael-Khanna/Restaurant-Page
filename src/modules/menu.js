`use strict`;

let menuContent = (function(){
    let content = document.querySelector(`#content`);

    let headerCreator = function(){
        let header = document.createElement(`div`);

        header.classList.add(`header`);
        header.classList.add(`rmvElement`);
        header.textContent = `Menu`;
        
        content.appendChild(header);
    }

    let burgerCreator = function(){
        let i;
        let burgerMsg = [`Super Sour Burger \t 8.99 \n \n The Super Sour Burger packs a life-changing punch, and after just one bite you'll be in love. Not only does it have plenty of nutrients, it also has an amazing taste.`, `Green Chile Burger \t 8.99 \n \n Have you ever wanted healthy food, but also something that's super tasty and spicy? Then this is for you? The Green Chile Burger delivers across the board in all catagories, spice, taste, texture, and more. Try it today!!!`, `Death God Burger \t ??? \n \n Za just claym gt z ryt vrdict. Ay castl built frmZa slab ws hwn frm havy blccs awf slat�. Brng yur prblms tu z wis ¢if.`];
        for(i = 1; i <= 3; i++){
            let BurgerDiv = document.createElement(`div`);
            let pictureDiv = document.createElement(`div`);
            let textDiv = document.createElement(`div`);
            let Burger = document.createElement(`img`);
            
            Burger.classList.add(`rmvElement`);
            Burger.classList.add(`menuPic`);
            Burger.src = `Burger${i}.png`;
    
            textDiv.classList.add(`rmvElement`);
            textDiv.classList.add(`menuText`);
            textDiv.textContent = burgerMsg[i - 1];
    
            pictureDiv.classList.add(`rmvElement`);
            pictureDiv.classList.add(`picContainer`);
    
            BurgerDiv.classList.add(`rmvElement`);
            BurgerDiv.classList.add(`menuDiv`);
    
            content.appendChild(BurgerDiv);
            BurgerDiv.appendChild(textDiv);
            BurgerDiv.appendChild(pictureDiv);
            pictureDiv.appendChild(Burger);
        }
    }

    let waterCreator = function(){
        let waterDiv = document.createElement(`div`);
        let pictureDiv = document.createElement(`div`);
        let textDiv = document.createElement(`div`);
        let water = document.createElement(`img`);
        
        water.classList.add(`rmvElement`);
        water.classList.add(`menuPic`);
        water.src = `NarutonicWater.png`;

        textDiv.classList.add(`rmvElement`);
        textDiv.classList.add(`menuText`);
        textDiv.textContent = `Narutonic Water \t $3.99 \n \n Keep yourself hydrated with Narutonic Water! It has all the chakra you need in every can! Believe it! Narutonic Water is a great refreshing drink that can get you fully recovered for your next mission. `;

        pictureDiv.classList.add(`rmvElement`);
        pictureDiv.classList.add(`picContainer`);

        waterDiv.classList.add(`rmvElement`);
        waterDiv.classList.add(`menuDiv`);

        content.appendChild(waterDiv);
        waterDiv.appendChild(textDiv);
        waterDiv.appendChild(pictureDiv);
        pictureDiv.appendChild(water);
    }

    return {
        headerCreator,
        burgerCreator,
        waterCreator,
    }
})();

export {menuContent};
