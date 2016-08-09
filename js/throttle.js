// Use this function to implement `on scroll` event functions
// syncronized with animation framerate
// this functions should not be called many many times on scrolling
// see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
function throttle(type, name, obj) {
  obj = obj || window;
  var running = false;
  var func = function() {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
      });
  };
  obj.addEventListener(type, func);
};
