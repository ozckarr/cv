
/**
 * @type {Number} scrolledDistance - How far you have scrolled
 * When passing 150 show upButton and vice verca
 */
 window.addEventListener('scroll', () => {
     const scrolledDistance = window.scrollY;
    if(scrolledDistance > 150){
    document.getElementById("upButton").style.display = "block";
    } else if (scrolledDistance <= 150){
    document.getElementById("upButton").style.display = "none";
    }
 });

 //Takes user to position 0 aka the top
 function goToTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  

 
 /** Lightbox control
  *  @param {HTMLDivElement} kuritornLightbox - Controls the kuritornLightbox area in the the lightbox
 */
  const lightbox = document.getElementById("lightboxBackground");



  /**
   *  @param {HTMLDivElement} kuritornLightbox - Controls the kuritornLightbox area in the the lightbox
  */
  const kuritornLightbox = document.getElementById("kuritornLightbox");

  // Lightbox kuritor control 
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
   *  @param {HTMLDivElement} alingsasLightbox - Controls the alingsasLightbox area in the the lightbox
  */
  const alingsasLightbox = document.getElementById("alingsasLightbox");

 // Lightbox alingsas control 
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
   *  @param {HTMLDivElement} rimliktLightbox - Controls the rimliktLightbox area in the the lightbox
  */
  const rimliktLightbox = document.getElementById("rimliktLightbox");

   // Lightbox rimlikt control 
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
   *  @param {HTMLDivElement} vilsekomnaLightbox - Controls the vilsekomnaLightbox area in the the lightbox
  */
  const vilsekomnaLightbox = document.getElementById("vilsekomnaLightbox");

   // Lightbox vilsekomnaLightbox control 
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
   *  @param {HTMLDivElement} potatomonLightbox - Controls the potatomonLightbox area in the the lightbox
  */
  const potatomonLightbox = document.getElementById("potatomonLightbox");

   // Lightbox  control 
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
   *  @param {HTMLDivElement} ljudbokLightbox - Controls the ljudbokLightbox area in the the lightbox
  */
  const ljudbokLightbox = document.getElementById("ljudbokLightbox");

   // Lightbox  control 
  function ljudbokLightboxOn(){
    ljudbokLightbox.style.display = 'block';
    lightbox.style.display = 'block';
    lightbox.onclick = ljudbokLightboxOff;
  }

  function ljudbokLightboxOff(){
    ljudbokLightbox.style.display = 'none';
    lightbox.style.display = 'none';
  }
