const backbone = document.getElementById('backbone');
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  var scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 75) {
    backbone.classList.add('relative');
    backbone.classList.remove('absolute');
    navbar.classList.remove('relative');
    navbar.classList.add('fixed');
    navbar.classList.remove('absolute');
    navbar.classList.add('blurred');
    navbar.classList.remove('bg-transparent');
    // navbar2.classList.add('nav-fixed');
  } else {
    backbone.classList.remove('relative');
    backbone.classList.add('absolute');
    navbar.classList.add('relative');
    navbar.classList.remove('fixed');
    navbar.classList.add('absolute');
    navbar.classList.remove('blurred');
    navbar.classList.add('bg-transparent');
    // navbar2.classList.remove('nav-fixed');
  }
});
