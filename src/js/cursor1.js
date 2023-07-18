const cursor1 = document.getElementById('cursor1');
const cursor2 = document.getElementById('cursor2');

document.addEventListener('mousemove', (e) => {
  cursor1.setAttribute(
    'style',
    'top: ' + (e.pageY - scrollY) + 'px; left: ' + e.pageX + 'px;'
  );
  cursor2.setAttribute(
    'style',
    'top: ' + (e.pageY - scrollY) + 'px; left: ' + e.pageX + 'px;'
  );
});

// $('nav a').mouseenter(function () {
//   cursor1.addClass('active');
// });

// $('nav a').mouseleave(function () {
//   cursor1.removeClass('active');
// });

// document.addEventListener('mouseover', (e) => {
//   cursor1.css({ transform: 'scale(2)' });
// });

// document.addEventListener('mouseleave', (e) => {
//   cursor1.css({ transform: 'scale(1)' });
// });

// $('a').on('mouseover', function () {
//   $('#cursor1').css({ transform: 'scale(2)' });
// });

// $('a').on('mouseleave', function () {
//   $('#cursor1').css({ transform: 'scale(1)' });
// });
