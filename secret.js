//Very secret code, just write "potato" on the site
/**
 * @type {Array} pressed - Saves button clicks
 */
const pressed = [];

/**
 * @param {String} secretCode - The letters that pressed looks for
 */
const secretCode = 'potatis';

/**
 * @param {HTMLDivElement} boxKuritorn - controls div with the same name, used here to replace background image
 */
const boxKuritorn = document.querySelector(".boxKuritorn");

/**
 * @param {HTMLDivElement} boxAlingsas - controls div with the same name, used here to replace background image
 */
const boxAlingsas = document.querySelector(".boxAlingsas");

/**
 * @param {HTMLDivElement} boxRimlikt - controls div with the same name, used here to replace background image
 */
const boxRimlikt = document.querySelector(".boxRimlikt");

/**
 * @param {HTMLDivElement} boxVilsekomna - controls div with the same name, used here to replace background image
 */
const boxVilsekomna = document.querySelector(".boxVilsekomna")

/**
 * @param {HTMLDivElement} boxPotatamon - controls div with the same name, used here to replace background image
 */
const boxPotatamon = document.querySelector(".boxPotatamon");

/**
 * @param {HTMLDivElement} boxLjudbok - controls div with the same name, used here to replace background image
 */
const boxLjudbok = document.querySelector(".boxLjudbok");

/**
 * @param {HTMLDivElement} boxJobbbackground - controls div with the same name, used here to replace background image
 */
const boxJobbbackground = document.querySelector(".boxJobbbackground");

/**
 * @param {HTMLDivElement} boxUtbildningbackground - controls div with the same name, used here to replace background image
 */
const boxUtbildningbackground = document.querySelector(".boxUtbildningbackground");

/**
 * @param {HTMLDivElement} boxKontaktbackground - controls div with the same name, used here to replace background image
 */
const boxKontaktbackground = document.querySelector(".boxKontaktbackground");

/**
 * Replaces images with potatoes
 */
 window.addEventListener('keyup',(e) =>{
     pressed.push(e.key);
     pressed.splice(-secretCode.length - 1, secretCode.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        document.body.style.backgroundImage = "url('./images/potatto_mode.gif')";
        document.body.style.backgroundSize = "3rem";
        boxKuritorn.style.backgroundImage = "url('images/potatto_mode.gif')";
        boxAlingsas.style.backgroundImage = "url('images/potatto_mode.gif')";
        boxRimlikt.style.backgroundImage = "url('images/potatto_mode.gif')";
        boxVilsekomna.style.backgroundImage = "url('images/potatto_mode.gif')";
        boxPotatamon.style.backgroundImage = "url('images/potatto_mode.gif')";
        boxLjudbok.style.backgroundImage = "url('images/potatto_mode.gif')";
        boxJobbbackground.style.backgroundImage = "url('images/potatis_still.png')";
        boxUtbildningbackground.style.backgroundImage = "url('images/potatis_still.png')";
        boxKontaktbackground.style.backgroundImage = "url('images/potatis_still.png')";
    }
 })