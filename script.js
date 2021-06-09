// sticky navbar on scrolling
window.addEventListener("scroll", function()
{
    if(window.scrollY > 10)
        this.document.getElementById("change").className = "sticky";
    else
        this.document.getElementById("change").className = "navbar";    
})

//menu toggle
var a=0;
function menutoggle()
{
    a++;
    if(a%2!=0)
    {
        this.document.getElementById("menu-items").className = "show";
        this.document.getElementById("menu-icon").className = "fa fa-times";
    }
    else
    {
        this.document.getElementById("menu-items").className = "normal";
        this.document.getElementById("menu-icon").className = "fa fa-bars";
    }
       
}


//customer reviews
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}