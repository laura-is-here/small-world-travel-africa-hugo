const menuToggle = document.querySelector('#menu-toggler');
const html = document.querySelector('html');
const menuContent = document.querySelector('.nav-content');
const navBar = document.querySelector('nav');
const menuToggleIcon = menuToggle.children;

document.addEventListener('DOMContentLoaded', () => {
    html.classList.toggle('js');
});

menuToggle.addEventListener('click', () => {
    let expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
   menuContent.classList.toggle('show'); 
   if (menuContent.classList.contains('show')) {
       menuToggleIcon.item(0).innerHTML = 'Close';
       menuToggleIcon.item(1).classList.replace('fa-bars', 'fa-window-close');
   } else {
       menuToggleIcon.item(0).innerHTML = 'Menu';
       menuToggleIcon.item(1).classList.replace('fa-window-close', 'fa-bars');
   }
});
// Get the modal
const modal = document.querySelector('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const images = document.querySelectorAll('.gallery-image');
const modalImg = document.querySelector('#img01');
const captionText = document.getElementById('caption');
let i;


for (i = 0; i < images.length; i++) {
    let img = images[i];

    img.addEventListener('click', function(evt) {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
};

    
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

/*
const collapsibles = document.querySelectorAll('.collapsible');

for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.innerHTML = "Show";
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('hide');
        } else {
            this.innerHTML = "Hide";
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('hide');
        }
    })
}
*/