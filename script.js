/**
 * When the user enters "potatis"(anywhere), Potato-mode is activated. 
 */
const pressed = [];
const secretCode = 'potatis';
 window.addEventListener('keyup',(e) =>{
     pressed.push(e.key);
     pressed.splice(-secretCode.length - 1, secretCode.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        document.body.style.backgroundImage = "url('images/potato.png')";
        document.body.style.backgroundSize = "3rem";
        document.querySelector(".boxKuritorn").style.backgroundImage = "url('images/potatto_mode.gif')";
        document.querySelector(".boxAlingsas").style.backgroundImage = "url('images/potatto_mode.gif')";
        document.querySelector(".boxRimlikt").style.backgroundImage = "url('images/potatto_mode.gif')";
        document.querySelector(".boxVilsekomna").style.backgroundImage = "url('images/potatto_mode.gif')";
        document.querySelector(".boxPotatamon").style.backgroundImage = "url('images/potatto_mode.gif')";
        document.querySelector(".boxLjudbok").style.backgroundImage = "url('images/potatto_mode.gif')";
        document.querySelector(".boxJobbbackground").style.backgroundImage = "url('images/potatis_still.png')";
        document.querySelector(".boxUtbildningbackground").style.backgroundImage = "url('images/potatis_still.png')";
        document.querySelector(".boxKontaktbackground").style.backgroundImage = "url('images/potatis_still.png')";
    }
 })



/**
 * Takes the user to the top of the site
 */

 window.addEventListener('scroll', () => {
     const scrolledDistance = window.scrollY;
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

  /** Lightbox control
   * 
   */
  const lightbox = document.getElementById("lightboxBackground");
  const kuritornLightbox = document.getElementById("kuritornLightbox");
  const alingsasLightbox = document.getElementById("alingsasLightbox");
  const rimliktLightbox = document.getElementById("rimliktLightbox");
  const vilsekomnaLightbox = document.getElementById("vilsekomnaLightbox");
  const potatomonLightbox = document.getElementById("potatomonLightbox");
  const ljudbokLightbox = document.getElementById("ljudbokLightbox");

 /**
   * Lightbox kuritorn control
   */
  function lightboxKuritorOn(){
    kuritornLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = lightboxKuritorOff;
  }

  function lightboxKuritorOff(){
    kuritornLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }


 /**
   * Lightbox alingsas control
   */
  function alingsasLightboxOn(){
    alingsasLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = alingsasLightboxOff;
  }

  function alingsasLightboxOff(){
    alingsasLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }

 /**
   * Lightbox rimlikt control
   */
  function rimliktLightboxOn(){
    rimliktLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = rimliktLightboxOff;
  }

  function rimliktLightboxOff(){
    rimliktLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }

 /**
   * Lightbox vilsekomna control
   */
  function vilsekomnaLightboxOn(){
    vilsekomnaLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = vilsekomnaLightboxOff;
  }

  function vilsekomnaLightboxOff(){
    vilsekomnaLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }

   /**
   * Lightbox potatomon control
   */
  function potatomonLightboxOn(){
    potatomonLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = potatomonLightboxOff;
  }

  function potatomonLightboxOff(){
    potatomonLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }


   /**
   * Lightbox ljudbok control
   */
  function ljudbokLightboxOn(){
    ljudbokLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = ljudbokLightboxOff;
  }

  function ljudbokLightboxOff(){
    ljudbokLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }




  /**
  * @param {string} boxKontakt - Control boxKontakt div
  * @param {string} boxKontaktHidden - Control the hidden content in boxKontakt div
  * @param {string} boxKontaktDownButton - Control bboxKontaktbutton pointing down
  * @param {string} boxKontaktUpButton - Control boxKontakt button pointing up
  */
 const boxKontakt = document.querySelector('.boxKontakt');
 const boxKontaktHidden = document.querySelector('.boxKontakt .hideInMobile');
 const boxKontaktDownButton = document.querySelector('.boxKontakt .downToggleButton');
 const boxKontaktUpButton = document.querySelector('.boxKontakt .upToggleButton');


  boxKontakt.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxKontakt.style.height = "14rem";
      boxKontaktDownButton.style.display = "none";
      boxKontaktUpButton.style.display = "inline-block";
      setTimeout(function(){ boxKontaktHidden.style.display = "block"; }, 1);
    }
  });
  boxKontakt.addEventListener("click", function() {
    if (window.innerWidth <= 767 &&  boxKontaktHidden.style.display == "block") {
      boxKontakt.style.height = "1.5rem";
      setTimeout(function(){ boxKontaktHidden.style.display = "none"; }, 1);
      boxKontaktDownButton.style.display = "inline-block";
      boxKontaktUpButton.style.display = "none";
    }
  });



  /**
  * @param {string} boxOmMig - Control boxOmMig div
  * @param {string} boxOmMigHidden - Control the hidden content in boxOmMig div
  * @param {string} boxOmMigDownButton - Control boxOmMig button pointing down
  * @param {string} boxOmMigUpButton - Control boxOmMig button pointing up
  */

 const boxOmMig = document.querySelector('.boxOmMig');
 const boxOmMigHidden = document.querySelector('.boxOmMig .hideInMobile');
 const boxOmMigDownButton = document.querySelector('.boxOmMig .downToggleButton');
 const boxOmMigUpButton = document.querySelector('.boxOmMig .upToggleButton');

  boxOmMig.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxOmMig.style.height = "34rem";
      boxOmMigDownButton.style.display = "none";
      boxOmMigUpButton.style.display = "inline-block";
      setTimeout(function(){ boxOmMigHidden.style.display = "block"; }, 1);
    }
  });
  boxOmMig.addEventListener("click", function() {
    if (window.innerWidth <= 767 &&  boxOmMigHidden.style.display == "block") {
      boxOmMig.style.height = "1.5rem";
      setTimeout(function(){ boxOmMigHidden.style.display = "none"; }, 1);
      boxOmMigDownButton.style.display = "inline-block";
      boxOmMigUpButton.style.display = "none";
    }
  });


  /**
  * @param {string} boxUtbildning - Control boxUtbildning div
  * @param {string} boxUtbildningHidden - Control the hidden content in boxUtbildning div
  * @param {string} boxUtbildningDownButton - Control boxUtbildning button pointing down
  * @param {string} boxUtbildningUpButton - Control boxUtbildning button pointing up
  */

 const boxUtbildning = document.querySelector('.boxUtbildning');
 const boxUtbildningHidden = document.querySelector('.boxUtbildning .hideInMobile');
 const boxUtbildningDownButton = document.querySelector('.boxUtbildning .downToggleButton');
 const boxUtbildningUpButton = document.querySelector('.boxUtbildning .upToggleButton');

  boxUtbildning.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxUtbildning.style.height = "16rem";
      boxUtbildningDownButton.style.display = "none";
      boxUtbildningUpButton.style.display = "inline-block";
      setTimeout(function(){ boxUtbildningHidden.style.display = "block"; }, 1);
    }
  });
  boxUtbildning.addEventListener("click", function() {
    if (window.innerWidth <= 767 &&  boxUtbildningHidden.style.display == "block") {
      boxUtbildning.style.height = "1.5rem";
      setTimeout(function(){ boxUtbildningHidden.style.display = "none"; }, 1);
      boxUtbildningDownButton.style.display = "inline-block";
      boxUtbildningUpButton.style.display = "none";
    }
  });
  


  /**
  * @param {string} boxJobb - Control boxJobb div
  * @param {string} boxJobbHidden - Control the hidden content in boxJobb div
  * @param {string} boxJobbDownButton - Control boxJobb button pointing down
  * @param {string} boxJobbUpButton - Control boxJobb button pointing up
  */
 const boxJobb = document.querySelector('.boxJobb');
 const boxJobbHidden = document.querySelector('.boxJobb .hideInMobile');
 const boxJobbDownButton = document.querySelector('.boxJobb .downToggleButton');
 const boxJobbUpButton = document.querySelector('.boxJobb .upToggleButton');

  boxJobb.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxJobb.style.height = "27rem";
      boxJobbDownButton.style.display = "none";
      boxJobbUpButton.style.display = "inline-block";
      setTimeout(function(){ boxJobbHidden.style.display = "block"; }, 1);
    }
  });
  boxJobb.addEventListener("click", function() {
    if (window.innerWidth <= 767 &&  boxJobbHidden.style.display == "block") {
      boxJobb.style.height = "1.5rem";
      setTimeout(function(){ boxJobbHidden.style.display = "none"; }, 1);
      boxJobbDownButton.style.display = "inline-block";
      boxJobbUpButton.style.display = "none";
    }
  });




/**
 * When the window is resized every box is reseted so that no Javascript size is excedentaly saved during the resize
 * Every size should be the same in CSS
*/

  window.addEventListener('resize', function() {
  if(window.innerWidth <= 767){
      boxKontakt.style.height = "1.5rem";
      boxKontaktHidden.style.display = "none";
      boxOmMig.style.height = "1.5rem";
      boxOmMigHidden.style.display = "none";
      boxUtbildning.style.height = "1.5rem";
      boxUtbildningHidden.style.display = "none";
      boxJobb.style.height = "1.5rem";
      boxJobbHidden.style.display = "none";
      boxKontaktDownButton.style.display = "inline-block";
      boxKontaktUpButton.style.display = "none";
      boxUtbildningDownButton.style.display = "inline-block";
      boxOmMigUpButton.style.display = "none";
      boxOmMigDownButton.style.display = "inline-block";
      boxUtbildningUpButton.style.display = "none";
      boxJobbDownButton.style.display = "inline-block";
      boxJobbUpButton.style.display = "none";
  }if(window.innerWidth >= 768 && window.innerWidth <= 991) {
      boxKontakt.style.height = "17rem";
      boxKontaktHidden.style.display = "block";
      boxOmMig.style.height = "16rem";
      boxOmMigHidden.style.display = "block";
      boxUtbildning.style.height = "14rem";
      boxUtbildningHidden.style.display = "block";
      boxJobb.style.height = "29rem";
      boxJobbHidden.style.display = "block";
      boxKontaktDownButton.style.display = "none";
      boxKontaktUpButton.style.display = "none";
      boxOmMigDownButton.style.display = "none";
      boxOmMigUpButton.style.display = "none";
      boxUtbildningDownButton.style.display = "none";
      boxUtbildningUpButton.style.display = "none";
      boxJobbDownButton.style.display = "none";
      boxJobbUpButton.style.display = "none";
    }else if(window.innerWidth >= 992 && window.innerWidth <= 1199){
      boxKontakt.style.height = "17rem";
      boxKontaktHidden.style.display = "block";
      boxOmMig.style.height = "15rem";
      boxOmMigHidden.style.display = "block";
      boxUtbildning.style.height = "17rem";
      boxUtbildningHidden.style.display = "block";
      boxJobb.style.height = "17rem";
      boxJobbHidden.style.display = "block";
      boxKontaktDownButton.style.display = "none";
      boxKontaktUpButton.style.display = "none";
      boxOmMigDownButton.style.display = "none";
      boxOmMigUpButton.style.display = "none";
      boxUtbildningDownButton.style.display = "none";
      boxUtbildningUpButton.style.display = "none";
      boxJobbDownButton.style.display = "none";
      boxJobbUpButton.style.display = "none";
    }else if(window.innerWidth >= 1200){
      boxKontakt.style.height = "15rem";
      boxKontaktHidden.style.display = "block";
      boxOmMig.style.height = "16rem";
      boxOmMigHidden.style.display = "block";
      boxUtbildning.style.height = "15rem";
      boxUtbildningHidden.style.display = "block";
      boxJobb.style.height = "16rem";
      boxJobbHidden.style.display = "block";
      boxKontaktDownButton.style.display = "none";
      boxKontaktUpButton.style.display = "none";
      boxOmMigDownButton.style.display = "none";
      boxOmMigUpButton.style.display = "none";
      boxUtbildningDownButton.style.display = "none";
      boxUtbildningUpButton.style.display = "none";
      boxJobbDownButton.style.display = "none";
      boxJobbUpButton.style.display = "none";
    }
  }
  )
