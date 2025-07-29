gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  Draggable,
  InertiaPlugin,
  SplitText
);

document.addEventListener("DOMContentLoaded", () => {
  let mySplitText = new SplitText(".hero-animated-text", { type: "chars" });
  let chars = mySplitText.chars;
  let mySplitTextFooter = new SplitText(".footer-title", {
    type: "chars",
  });
  let charsFooter = mySplitTextFooter.chars;
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

  function pauseScroll() {
    smoother.paused(true);
  }

  function resumeScroll() {
    smoother.paused(false);
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

  gsap.set([".element7, .element8, .element9"], {
    y: "100%",
    opacity: 0,
  });

  gsap.set(chars, {
    opacity: 0,
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

  if (!isMobile()) {
    tl.to(".hero-phrase", {
      opacity: 0,
      y: "-100%",
    });
  } else {
    tl.to(".hero-phrase", {
      opacity: 0,
    });
  }

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
    chars,
    {
      opacity: 1,
      stagger: 0.1,
      duration: 1,
    },
    "<"
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

  tl.to(["body"], {
    duration: 2,
    backgroundColor: "#dd5be1",
  });

  tl.to(
    chars,
    {
      opacity: 0,
      duration: 1,
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
    duration: 4,
  });

  if (!isMobile()) {
    tl.to([".element7, .element8, .element9"], {
      y: "-10%",
      opacity: 1,
      duration: 2,
      stagger: 0.5,
    });
  }

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
    duration: 2,
  });

  tl2.to(".card2", {
    rotate: 0,
    x: "115%",
    duration: 2,
  });

  tl2.to(".card1", {
    rotate: 0,
    duration: 2,
  });

  gsap.to(".ticker", {
    xPercent: -50,
    ease: "none",
    duration: 10,
    repeat: -1,
  });

  if (!isMobile()) {
    gsap.to(".menu-items-container", {
      scrollTrigger: {
        trigger: ".menu-apresentation",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      width: "100%",
    });
  } else {
    gsap.set(".menu-items-container", {
      width: "100%",
    });
  }

  const items = document.querySelectorAll(".draggable-ice-cream");
  const liItems = document.querySelectorAll(".menu-paper-li-item");

  items.forEach((DraggableItem) => {
    Draggable.create(DraggableItem, {
      bounds: ".menu-items-container",
      inertia: true,
    });
  });

  gsap.set(charsFooter, {
    opacity: 0,
    y: "-100%",
  });

  gsap.set([".link,.footer-copy, .map"], {
    opacity: 0,
  });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-animation-container",
      start: "top center",
      end: "bottom top",
      scrub: true,
      ease: "power2.inOut",
    },
    onComplete: () => {
      gsap.to(charsFooter, {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        ease: "power4.inOut",
        stagger: 0.08,
      });

      gsap.to([".link,.footer-copy, .map"], {
        opacity: 1,
        delay: 1,
      });
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
      resumeScroll();
      gsap.to(".mobile-side-bar", {
        x: "100%",
        ease: "elastic.out(0.5, 1)",
      });
      sideLinks.forEach((sideLink) => {
        gsap.to(sideLink, {
          opacity: 0,
          x: "100%",
          stagger: 0.1,
          ease: "power2.inOut",
        });
      });
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
      gsap.to(charsFooter, {
        opacity: 0,
        y: "-100%",
        duration: 0.2,
        stagger: 0.03,
      });

      gsap.to([".link,.footer-copy, .map"], {
        opacity: 0,
      });
    },
  });

  //mobile sidebar
  const openSidebar = document.querySelector(".side-bar-open");
  const closeSidebar = document.querySelector(".side-bar-close");
  const sideLinks = document.querySelectorAll(".side-link");

  sideLinks.forEach((sideLink) => {
    gsap.set(sideLink, {
      opacity: 0,
      x: "100%",
      stagger: 0.1,
      ease: "power2.inOut",
    });
  });

  openSidebar.addEventListener("click", () => {
    pauseScroll();
    gsap.to(".mobile-side-bar", {
      x: 0,
      ease: "elastic.out(0.5, 1)",
    });

    sideLinks.forEach((sideLink) => {
      gsap.to(sideLink, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "power2.inOut",
      });
    });
  });

  closeSidebar.addEventListener("click", () => {
    resumeScroll();
    gsap.to(".mobile-side-bar", {
      x: "100%",
      ease: "elastic.out(0.5, 1)",
    });
    sideLinks.forEach((sideLink) => {
      gsap.to(sideLink, {
        opacity: 0,
        x: "100%",
        stagger: 0.1,
        ease: "power2.inOut",
      });
    });
  });

  gsap.to(".mobile-side-bar-animated-element img", {
    rotation: 360,
    duration: 9,
    ease: "none",
    repeat: -1,
  });
});
