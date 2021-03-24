`use strict`;

let contactContent = (function(){
    let content = document.querySelector(`#content`);
    
    let text = `Address:\n123 Main Street, Konoha, LV 123456\n\nNumber:\n1(661)440-5874\n`

    let infoCreator = function(){
        let info = document.createElement(`div`);
        let img = document.createElement(`img`);

        img.classList.add(`menuImg`);
        img.classList.add(`rmvElement`);
        img.src = `teenBoruto.jpeg`;

        info.classList.add(`info`);
        info.classList.add(`rmvElement`);
        info.textContent = text;
        
        content.appendChild(info);
        info.appendChild(img)
    };

    return {
        infoCreator,
    }
})();


export {contactContent};
