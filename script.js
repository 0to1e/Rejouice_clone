var cursorBackground = document.getElementById("main");
var cursor = document.getElementById("cursor");
cursorBackground.addEventListener("mousemove", function (evt) {
  gsap.to("#cursor", {
    x: evt.x,
    y: evt.y,
  });
});
