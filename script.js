// SIMPLE TESTIMONIAL AUTO SLIDER (optional)
let testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

function rotateTestimonials() {
    testimonials[index].style.opacity = 0;
    index = (index + 1) % testimonials.length;
    testimonials[index].style.opacity = 1;
}

setInterval(rotateTestimonials, 5000);

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------
   HERO ANIMATIONS
------------------------------ */
gsap.from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

gsap.from(".hero-desc", {
    y: 40,
    opacity: 0,
    delay: 0.3,
    duration: 1.2,
    ease: "power4.out"
});

gsap.from(".hero-buttons", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out"
});

/* ------------------------------
   HERO IMAGE CARD FLOAT
------------------------------ */
gsap.to(".hero-card", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

/* ------------------------------
   STATS SCROLL REVEAL
------------------------------ */
gsap.utils.toArray(".stat").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.15,
        ease: "power3.out"
    });
});

/* ------------------------------
   ABOUT SECTION
------------------------------ */
gsap.from(".about-card", {
    scrollTrigger: {
        trigger: ".about-card",
        start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

/* ------------------------------
   IMPACT CARDS
------------------------------ */
gsap.utils.toArray(".impact-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.15,
        ease: "power2.out"
    });
});

/* ------------------------------
   TESTIMONIAL
------------------------------ */
gsap.from(".testimonial-card", {
    scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});


