


function ValueSetter() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set(".row h2", { x: "-100%" });
  gsap.set(".row h1", { x: "-100%" });
  gsap.set(".row h3", { x: "-100%" });
  gsap.set(".home-right", { opacity: 0 });
  gsap.set(".home-right img", { x: "100%", opacity: 0 });
  gsap.set(".row p", { y: "70%", opacity: 0 });
  gsap.set(".row .btn", { y: "70%", opacity: 0 });
}


function animateHomePage() {
  var t1 = gsap.timeline();
  t1.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.005,
    ease: Expo.easeInOut,
  })
    .to(".row h2", {
      x: 0,
      duration: 1,
      ease: Expo.easeInOut,
    })
    .to(".row h1", {
      x: 0,
      duration: 0.5,
      ease: Expo.easeInOut,
    })
    .to(".row h3", {
      x: 0,
      duration: 0.5,
      ease: Expo.easeInOut,
    })
    .to(".home-right", {
        opacity: 1,
        duration: 0.5,
        ease: Expo.easeInOut,
    })
    .to(".home-right img", {
      opacity: 1,
      x: 0,
      ease: Expo.easeInOut,
    })
    .to(".row p", {
      opacity: 1,
      y: 0,
      ease: Expo.easeInOut,
    })
    .to(".row .btn", {
      opacity: 1,
      y: 0,
      ease: Expo.easeInOut,
    });
}
// revelToSpan();
ValueSetter();
// loaderAnimation();
animateHomePage();


var htag = document.querySelectorAll(".sefty-right .text h1");

htag.forEach(function (elem) {
  var clutter = "";
  var h1Text = elem.textContent;
  var splitedText = h1Text.split("");
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to(".sefty-right h1 span", {
  color: "#000000",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".sefty-right .text h1",
    scroller: "body",
    start: "top 25%",
    end: "top -150%",
    scrub: 1,
    pin: ".sefty-right .text",
  },
});




Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".d", {
   images:[ "./gallary/r1.png"],
})

Shery.textAnimate(".d" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });




gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-100%",
    ease: Power1,
  });
  
  let sections = document.querySelectorAll(".fleftelm");
  Shery.imageEffect(".images", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });
  





  window.addEventListener("wheel", function(e){
    if(e.deltaY > 0){
  
      gsap.to(".marque",{
        transform: 'translateX(-120%)',
        duration:4,
        repeat: -1,
        ease: "none"
      })
      gsap.to(".marque img",{
        rotate:360
      })
    } else{
  
      gsap.to(".marque",{
        transform: 'translateX(0%)',
        duration:2,
        repeat: -1,
        ease: "none"
    })
    gsap.to(".marque img",{
      rotate:0
    })
  }
  
  })