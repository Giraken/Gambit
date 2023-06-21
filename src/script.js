// JavaScript
function slowScrollTo(element, duration) {
  const targetPosition = element.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollAmount = Math.easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Easing equation for smooth scroll
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(scrollAnimation);
}

// Usage
const targetElement = document.getElementById('target');
slowScrollTo(targetElement, 1000); // Scrolls slowly to the target element in 1000 milliseconds (1 second)
