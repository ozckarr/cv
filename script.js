/**
 * When the user enters "potato", Potato-mode is activated. 
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
  * @param {string} boxKontakt - Control the hidden content in boxKontakt div
  */
  const boxKontakt = document.querySelector('.boxKontakt');
  const boxKontaktHidden = document.querySelector('.boxKontakt .hideInMobile');

  boxKontakt.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxKontakt.style.height = "14rem";
      boxKontaktHidden.style.display = "block";
    }
  });

  /**
  * @param {string} boxOmMig - Control boxOmMig div
  * @param {string} boxOmMigHidden - Control the hidden content in boxOmMig div
  */
 const boxOmMig = document.querySelector('.boxOmMig');
 const boxOmMigHidden = document.querySelector('.boxOmMig .hideInMobile');

  boxOmMig.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxOmMig.style.height = "42.5rem";
      boxOmMigHidden.style.display = "block";
    }
  });

  /**
  * @param {string} boxUtbildning - Control boxUtbildning div
  * @param {string} boxUtbildningHidden - Control the hidden content in boxUtbildning div
  */
 const boxUtbildning = document.querySelector('.boxUtbildning');
 const boxUtbildningHidden = document.querySelector('.boxUtbildning .hideInMobile');

 boxUtbildning.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxUtbildning.style.height = "17rem";
      boxUtbildningHidden.style.display = "block";
    }
  });


  /**
  * @param {string} boxJobb - Control boxJobb div
  * @param {string} boxJobbHidden - Control the hidden content in boxJobb div
  */
 const boxJobb = document.querySelector('.boxJobb');
 const boxJobbHidden = document.querySelector('.boxJobb .hideInMobile');

 boxJobb.addEventListener("click", function() {
    if (window.innerWidth <= 767) {
      boxJobb.style.height = "27rem";
      boxJobbHidden.style.display = "block";
    }
  });



  /**
   * 
   * ELSE IF SOM ELSE med samma content
   * 
   * 
   */
  window.addEventListener('resize', function() {
    if(window.innerWidth >= 768 && window.innerWidth <= 991) {
      boxKontakt.style.height = "17rem;";
      dboxKontaktHidden.style.display = "block";
      boxOmMig.style.height = "16rem";
      boxOmMigHidden.style.display = "block";
      boxUtbildning.style.height = "14rem";
      boxUtbildningHidden.style.display = "block";
      boxJobb.style.height = "29rem";
      boxJobbHidden.style.display = "block";

    }else if(window.innerWidth >= 992 && window.innerWidth <= 1199){
      boxKontakt.style.height = "17rem;";
      boxOmMig.style.height = "15rem";
      boxUtbildning.style.height = "17rem";
      boxJobb.style.height = "17rem";
    }else if(window.innerWidth >= 1200){
      boxKontakt.style.height = "15rem;";
      boxOmMig.style.height = "16rem";
      boxUtbildning.style.height = "15rem";
      boxJobb.style.height = "16rem";
    } else{
      boxKontakt.style.height = "1.5rem";
      dboxKontaktHidden.style.display = "none";
      boxOmMig.style.height = "1.5rem";
      boxOmMigHidden.style.display = "none";
      boxUtbildning.style.height = "1.5rem";
      boxUtbildningHidden.style.display = "none";
      boxJobb.style.height = "1.5rem";
      boxJobbHidden.style.display = "none";
  }
  }
  )
