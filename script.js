/**
 * When the user enters "potato", Potato-mode is activated. 
 */
const pressed = [];
const secretCode = 'potato';
 window.addEventListener('keyup',(e) =>{
     pressed.push(e.key);
     pressed.splice(-secretCode.length - 1, secretCode.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        document.body.style.backgroundImage = "url('images/potato.png')";
        document.body.style.backgroundSize = "3rem";
    
    }
 })

/**
 * Takes the user to the top of the site
 */

 window.addEventListener('scroll', () => {
     const scrolledDistance = window.scrollY;
     console.log(scrolledDistance);
    if(scrolledDistance > 150){
    document.getElementById("upButton").style.display = "block";
    } else if (scrolledDistance <= 150){
        document.getElementById("upButton").style.display = "none";
        }
 });

 function goToTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }