var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

//Index More Games Button Code
function myFunction() {
  var cards = document.querySelectorAll('.cardImg')
  console.log(cards[0]);

  if (cards[0].classList.contains('hidden')) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('hidden')
      }
  } else {
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.add('hidden');
    }
  }
}