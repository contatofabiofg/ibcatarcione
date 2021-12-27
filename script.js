function menumobile() {
  let menuarea = document.querySelector('.menu2');

  if (menuarea.style.display == "none") {
    menuarea.style.display = "flex";
  } else {
    menuarea.style.display = "none";

  }

}



function show() {
  if (window.screen.availWidth > 1000) {
    if (window.scrollY > 336 && window.scrollY < 750) {
      document.querySelector(".welcome-text").classList.remove("hidetitle");

      document.querySelector(".welcome-text").classList.add("showtitle");
    }
    else if (window.scrollY >= 750 && window.scrollY < 1150) {
      document.querySelector(".welcome-text").classList.remove("hidetitle");
      document.querySelector(".welcome-text").classList.add("showtitle");
      document.querySelector(".whoweare-text").classList.remove("hidetitle");
      document.querySelector(".whoweare-text").classList.add("showtitle");
    }

    else if (window.scrollY >= 1150) {
      document.querySelector(".welcome-text").classList.remove("hidetitle");
      document.querySelector(".welcome-text").classList.add("showtitle");
      document.querySelector(".whoweare-text").classList.remove("hidetitle");
      document.querySelector(".whoweare-text").classList.add("showtitle");
      document.querySelector(".believetitle").classList.remove("hidetitle");
      document.querySelector(".believetitle").classList.add("showtitle");
    }
  } else {
    document.querySelector(".welcome-text").classList.remove("hidetitle");
    document.querySelector(".welcome-text").classList.add("showtitle");
    document.querySelector(".whoweare-text").classList.remove("hidetitle");
    document.querySelector(".whoweare-text").classList.add("showtitle");
    document.querySelector(".believetitle").classList.remove("hidetitle");
    document.querySelector(".believetitle").classList.add("showtitle");
  }

}

window.addEventListener("scroll", show);


function send() {
  alert("Mensagem enviada!");

}