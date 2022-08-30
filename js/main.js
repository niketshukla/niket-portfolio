$(function() {
    var last_url = document.location.pathname.split('/').pop();
    $('nav').find('a.active').removeClass('active');
    $('.mob_nav').find('a.active').removeClass('active');

    $('nav').find("a[href='"+last_url+"']").addClass('active');
    $('.mob_nav').find("a[href='"+last_url+"']").addClass('active');
});

AOS.init({
easing: 'ease-in-sine',
once: true,
});
$(window).scroll(function(){
    $(".explore").css("opacity", 1 - $(window).scrollTop() / 5);
});
$(document).ready(function(){
    $(this).scrollTop(0);
});

// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var reachedTop = 150;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (st < reachedTop){
        // Scroll Down
        $('header').removeClass('nav_back');
    } else {
        // Scroll Up
        $('header').addClass('nav_back');
    }
    lastScrollTop = st;
}

//for mobile menu menu

$('#nav-icon').click(function(){
$(this).toggleClass('open');
});
$("#nav-icon.open").click(function(e) {
$(".mob_nav").hide();
e.stopPropagation();
});
$("#nav-icon").click(function(e){
$(".mob_nav").slideToggle(500);
e.stopPropagation();
console.log($(this).hasClass('open'));
if($(this).hasClass('open')){
$('body,html').attr('style','overflow:hidden;');
}
else{
$('body,html').attr('style','overflow-y:auto;height: auto;');
}
});
$('.menulist li a').click(function() {
$(".mob_nav").slideToggle(500, 'linear');
$('#nav-icon').toggleClass('open');
$('body,html').attr('style','overflow-y:auto;height: auto;');
});

/* for ios background scroll problem in open mob menu */
var fixed = document.getElementById('mob_fixed'); fixed.addEventListener('touchmove', function(e) { e.preventDefault(); }, false); 

$('.mob_nav .menulist li').click(function(){
$('.mob_nav .menulist li').removeClass('active');
$(this).addClass('active');
});

// scroll to open collapse accordian
$('.pill_accordian_data').on('shown.bs.collapse', function(e) {
    var $panel = $(this).closest('.pill_accordian');
    $('html,body').animate({
        scrollTop: $panel.offset().top
    }, 500);
});

/* smooth scroll */
// Add smooth scrolling to all links
$("nav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
  
    // Store hash
    var hash = this.hash;
  
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 1500, function(){
  
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  } // End if
  });