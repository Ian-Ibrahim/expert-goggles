
$(document).ready(function(){
  $(".testimonial-carousel").owlCarousel(
    {
      items: 1,
      center:true,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    slideSpeed: 100,
    autoPlay: true,
    }
  );
  
});
var owl = $('.testimonial-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
}) 

$(document).ready(function(){
  $(".social-carousel").owlCarousel(
    {
      items: 3,    
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: false,
    touchDrag:false,
    mouseDrag:false,
    navigation: true,
    slideSpeed: 10,
    autoPlay: true
    }
  );
});
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function defaultOpen() {
  // click on default tab
  document.getElementById("defaultOpen").click();
}
function menuRemove(){
  var element = document.getElementById("hamburger");
  element.classList.remove("menu-toggled");
  document.getElementById("mobile-nav").style.left ="-100%" ;
  
}
function menuValueChange() {
  var inputVal = document.getElementById("menuValue").value;
  if(inputVal==0){
    document.getElementById("menuValue").value = 1;
    var element = document.getElementById("hamburger");
  element.classList.add("menu-toggled");
  document.getElementById("mobile-nav").style.left = 0;  
  document.getElementsByTagName("body").style.overflowY = "hidden";     
  }
  if(inputVal==1){
    document.getElementById("menuValue").value = 0;
    var element = document.getElementById("hamburger");
  element.classList.remove("menu-toggled");
  document.getElementById("mobile-nav").style.left ="-100%" ;
  document.getElementById("mobile-nav-bar").style.height = "6em";
  }
}
