gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  Draggable,
  InertiaPlugin
);

document.addEventListener("DOMContentLoaded", () => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.01,
    effects: true,
  });

  function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }

  gsap.to(".hero-title", {
    scrollTrigger: {
      trigger: ".nav-logo",
      start: "top top",
      scrub: 1,
    },
    fontSize: "4rem",
    y: "10%",
  });

  gsap.set(".hero-animated-element img", {
    y: "-10%",
    rotate: "5deg",
    scale: 1.2,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=5500",
      scrub: true,
      pin: true,
    },
  });

  tl.to(".hero-phrase", {
    opacity: 0,
    y: "-100%",
  });

  tl.to(
    [".element1, .element2, .element3, .element4"],
    {
      stagger: 0.1,
      rotate: "-65deg",
      duration: 2,
      y: "-100vh",
      opacity: 0,
      display: "none",
    },
    "<"
  );

  tl.to(
    [".element5, .element6"],
    {
      stagger: 0.4,
      rotate: "65deg",
      duration: 2,
      y: "-100vh",
      opacity: 0,
      display: "none",
    },
    "<"
  );

  tl.to(
    ".hero-animated-element img",
    {
      rotate: "0",
      duration: 2,
    },
    "<"
  );

  tl.to(
    ".hero-animated-text",
    {
      opacity: 1,
    },
    "+=1"
  );

  tl.to(
    ".hero-animated-element img",
    {
      rotate: "-10deg",
      duration: 2,
      scale: 1.1,
    },
    "<"
  );

  tl.to(
    "body",
    {
      duration: 2,
      backgroundColor: "#f9f7e0",
    },
    "<"
  );

  tl.to(
    ".hero-animated-IMG",
    {
      duration: 2,
      opacity: 0.3,
    },
    "<"
  );

  tl.to(
    ".hero-animated-text",
    {
      opacity: 0,
    },
    "+=1"
  );

  tl.to(
    ["body"],
    {
      duration: 2,
      backgroundColor: "#dd5be1",
    },
    "<"
  );

  tl.to(
    ".hero-animated-IMG",
    {
      duration: 2,
      opacity: 1,
    },
    "<"
  );

  if (!isMobile()) {
    tl.to(".hero-animated-element", {
      y: "-5%",
      x: "75%",
      scale: 1.3,
      duration: 2,
      ease: "power1.inOut",
    });
  } else {
    tl.to(".hero-animated-element", {
      y: "-5%",
      x: "45%",
      scale: 1.3,
      duration: 2,
      ease: "power1.inOut",
    });
  }

  tl.to(
    ".hero-animated-element img",
    {
      rotate: "0deg",
      duration: 2,
      scale: 1.3,
    },
    "<"
  );

  tl.to(".hero-menu-btn", {
    opacity: 1,
    pointerEvents: "auto",
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".place-galery",
      start: "center center",
      end: "+=3000",
      scrub: true,
      pin: true,
      ease: "power4.inOut",
    },
  });

  tl2.to(".card3", {
    rotate: 0,
    x: "-115%",
  });

  tl2.to(".card2", {
    rotate: 0,
    x: "115%",
  });

  tl2.to(".card1", {
    rotate: 0,
  });

  gsap.to(".ticker", {
    xPercent: -50,
    ease: "none",
    duration: 10,
    repeat: -1,
  });

  gsap.to(".menu-items-container", {
    scrollTrigger: {
      trigger: ".menu-apresentation",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    width: "100%",
  });

  Draggable.create([".item1, .item2, .item3, .item4, .item5"], {
    bounds: ".menu-items-container",
    inertia: true,
  });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-animation-container",
      start: "top center",
      end: "bottom top",
      scrub: true,
      ease: "power2.inOut",
    },
  });

  tl3.to(".ice-cream-ball", {
    scale: 1,
    duration: 2,
  });

  if (!isMobile()) {
    tl3.to(
      ".ice-cream-body",
      {
        rotateX: "0",
        scale: 1,
        x: "25%",
        duration: 2,
      },
      "<"
    );
  } else {
    tl3.to(
      ".ice-cream-body",
      {
        rotateX: "0",
        scale: 1,
        x: "25%",
        y: "-20%",
        duration: 2,
      },
      "<"
    );
  }

  tl3.to(".footer-animation-container", {
    y: "175%",
    duration: 3,
  });

  tl3.to(".ice-cream-draw", {
    scale: 0.7,
    rotate: "-15deg",
    ease: "elastic.out(1, 0.4)",
  });

  function scrollToId(id) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      gsap.to(window, {
        scrollTo: element,
        duration: 1.5,
        ease: "power4.inOut",
      });
    }
  }

  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("data-scroll");
      scrollToId(id);
    });
  });

  ScrollTrigger.create({
    trigger: "footer",
    start: "top center",
    scrub: true,

    onEnter: () => {
      gsap.to("header nav", { y: "-100%", ease: "power4.inOut" });
    },
    onLeaveBack: () => {
      gsap.to("header nav", { y: "0%", ease: "power4.inOut" });
    },
  });
});
