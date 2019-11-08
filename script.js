/**
 * When the user enters "potato", Potato-mode is activated. 
 */
const pressed = [];
const secretCode = 'potato';
 window.addEventListener('keyup',(e) =>{
     pressed.push(e.key);
     pressed.splice(-secretCode.length - 1, secretCode.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        console.log('njds');
        document.body.style.backgroundImage = "url('images/potato.png')";
        document.body.style.backgroundSize = "3rem";
    
    }
 })

