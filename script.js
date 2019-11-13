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
        document.getElementsByClassName("boxKuritorn")[0].style.backgroundImage = "url('images/potatto_mode.gif')";
        document.getElementsByClassName("boxAlingsas")[0].style.backgroundImage = "url('images/potatto_mode.gif')";
        document.getElementsByClassName("boxRimlikt")[0].style.backgroundImage = "url('images/potatto_mode.gif')";
        document.getElementsByClassName("boxVilsekomna")[0].style.backgroundImage = "url('images/potatto_mode.gif')";
        document.getElementsByClassName("boxPotatamon")[0].style.backgroundImage = "url('images/potatto_mode.gif')";
        document.getElementsByClassName("boxLjudbok")[0].style.backgroundImage = "url('images/potatto_mode.gif')";
        document.getElementsByClassName("boxJobbbackground")[0].style.backgroundImage = "url('images/potatis_still.png')";
        document.getElementsByClassName("boxUtbildningbackground")[0].style.backgroundImage = "url('images/potatis_still.png')";
        document.getElementsByClassName("boxKontaktbackground")[0].style.backgroundImage = "url('images/potatis_still.png')";
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



  /**Mobile Meny resize */
  document.querySelector('.boxKontakt').addEventListener("click", reziseBoxKontakt);

  function reziseBoxKontakt(){
    if (window.innerWidth <= 768) {
      document.querySelector('.boxKontakt').style.height = "14rem";
      document.querySelector('.boxKontakt .hideInMobile').style.display = "block";
    }

  }

  document.querySelector('.boxOmMig').addEventListener("click", reziseboxOmMig);

  function reziseboxOmMig(){
    if (window.innerWidth <= 768) {
      document.querySelector('.boxOmMig').style.height = "42.5rem";
      document.querySelector('.boxOmMig .hideInMobile').style.display = "block";
    }

  }

  window.addEventListener('resize', function() {
    console.log(window.innerWidth)
  })