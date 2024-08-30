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

gsap.to("#page2 h1",{
transform:"translateX(-150%)",
scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin:true,
}
})