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
