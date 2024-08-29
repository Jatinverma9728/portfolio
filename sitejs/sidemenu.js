var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0px";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

var tl = gsap.timeline();
tl.from("#header img", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("#header li", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
tl.from(".header-text span", {
  x: -300,
  opacity: 0,
  duration: 0.2,
});
