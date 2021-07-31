// Search Field Visible Effect
$(document).ready(function () {
    $(".search-area a").click(function () {
        $(".search-field").addClass("search-visible");
        $("body").addClass("overflow");
    });
});

// Search Field Remove Effect
$(document).ready(function () {
    $(".position-cross a").click(function () {
        $(".search-field").removeClass("search-visible");
        $("body").removeClass("overflow");
    });
});

// Animated Hamburger Icon
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    });
});

// Mobile Menu Visible
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".mobile-menu").toggleClass("menu-visible");
        $("main").toggleClass("main-hidden");
        $("footer").toggleClass("menu-overflow1");
    });
});

// Mobile Menu DropDown Visible
$(document).ready(function () {
    $(".mobile-menu .dropdown-hover").click(function () {
        $(".mobile-drop").toggleClass("mobile-drop-visible");
    });
});

// Flickity Slider Code
$(".main-carousel").flickity({
    cellAlign: "left",
    contain: true,
    groupCells: 3,
    wrapAround: true,
    autoPlay: 4000,
    prevNextButtons: false,
    draggable: false,
    friction: 0.8,
});

// Circle Free Floating Effect

console.clear();

const randomX = random(1, 30);
const randomY = random(1, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 2);
const randomTime2 = random(5, 10);
const randomAngle = random(-5, 20);

const cans = gsap.utils.toArray(".can");
cans.forEach((can) => {
    gsap.set(can, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
    });

    moveX(can, 1);
    moveY(can, -1);
    rotate(can, 1);
});

function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
    });
}

function moveX(target, direction) {
    gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
    });
}

function moveY(target, direction) {
    gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
    });
}

function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
}

// GSAP Animation

// Home Banner Animation
var homeBanner = gsap.timeline();

homeBanner.from(".hero-video-text h1", {
    duration: 1.5,
    autoAlpha: 0,
    delay: 0.8,
}),
    homeBanner.from(
        ".hero-video-text h1 span",
        {
            duration: 1.5,
            autoAlpha: 0,
        },
        "-=0.9"
    ),
    homeBanner.from(
        ".hero-video-text .talk-btn a",
        {
            duration: 1,
            autoAlpha: 0,
        },
        "-=1.1"
    ),
    homeBanner.from(
        ".home-banner-cicle",
        {
            duration: 1.5,
            autoAlpha: 0,
            stagger: 0.3,
        },
        "-=1.2"
    );

// Home Circle Parallax
var homeBParallax = gsap.timeline();

homeBParallax.to(".home-banner-cicle1", {
    scrollTrigger: {
        trigger: ".hero-video-area",
        start: "60% 55%",
        end: "bottom 0%",
        markers: false,
        scrub: 0.5,
    },
    y: -200,
}),
    homeBParallax.to(".home-banner-cicle2", {
        scrollTrigger: {
            trigger: ".hero-video-area",
            start: "70% 55%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -200,
    }),
    homeBParallax.to(".home-banner-cicle3", {
        scrollTrigger: {
            trigger: ".hero-video-area",
            start: "75% 55%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -200,
    }),
    homeBParallax.to(".home-banner-cicle4", {
        scrollTrigger: {
            trigger: ".hero-video-area",
            start: "100% 55%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -200,
    }),
    homeBParallax.to(".home-banner-cicle5", {
        scrollTrigger: {
            trigger: ".hero-video-area",
            start: "100% 55%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -200,
    });

// Process Area Animation
gsap.registerPlugin(ScrollTrigger);

var process = gsap.timeline({
    scrollTrigger: {
        trigger: ".process-area",
        start: "-100 65%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
        markers: false,
    },
});

process.to(".process-area", {
    duration: 1,
    backgroundImage: "linear-gradient(45.92deg, #00a6eb 0.59%, #8e00d8 98.66%)",
});

// Process Text Animation
gsap.registerPlugin(ScrollTrigger);

var processText = gsap.timeline({
    scrollTrigger: {
        trigger: ".process-content",
        start: "-100 65%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        markers: false,
    },
});

processText.from(".process-content h5", {
    duration: 1,
    autoAlpha: 0,
}),
    processText.from(
        ".process-content p",
        {
            duration: 1,
            autoAlpha: 0,
            stagger: 0.3,
        },
        "-=0.6"
    ),
    processText.from(
        ".process-btn a",
        {
            duration: 1,
            autoAlpha: 0,
        },
        "-=0.5"
    );

// About Area Animation
gsap.registerPlugin(ScrollTrigger);

var aboutCircle = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-communications .can",
        start: "-100 65%",
        end: "top top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

aboutCircle.from(".about-communications .can", {
    duration: 2,
    autoAlpha: 0,
    stagger: 0.35,
}),
    aboutCircle.from(
        ".process-content p",
        {
            duration: 1,
            autoAlpha: 0,
            stagger: 0.3,
        },
        "-=0.6"
    ),
    aboutCircle.from(
        ".process-btn a",
        {
            duration: 1,
            autoAlpha: 0,
        },
        "-=0.5"
    );

// Home About Circle Parallax
var aboutParallax = gsap.timeline();

aboutParallax.to(".human-big-circle", {
    scrollTrigger: {
        trigger: ".about-content",
        start: "80% 55%",
        end: "bottom 0%",
        toggleActions: "restart none none reverse",
        markers: false,
        scrub: 0.5,
    },
    y: -300,
}),
    aboutParallax.to(".about-yellow-circle", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "80% 50%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -300,
    }),
    aboutParallax.to(".about-violent-circle", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "80% 52%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -150,
    }),
    aboutParallax.to(".human-small-circle", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "80% 45%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -200,
    }),
    aboutParallax.to(".hand-phone-circle", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "80% 40%",
            end: "bottom 0%",
            markers: false,
            scrub: 0.5,
        },
        y: -200,
    });

var textWrapper = document.querySelector(".testimonial-content h5");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Testimonial Area Animation
gsap.registerPlugin(ScrollTrigger);

var testimonialText = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonial-content .havas-logo",
        start: "-100 65%",
        end: "top top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

testimonialText.from(".testimonial-content .havas-logo", {
    duration: 1.5,
    autoAlpha: 0,
}),
    testimonialText.from(
        ".testimonial-content h5 .letter",
        {
            duration: 0.5,
            autoAlpha: 0,
            scale: 0.8,
            stagger: 0.015,
        },
        "-=1"
    ),
    testimonialText.from(
        ".testimonial-content p",
        {
            duration: 1,
            autoAlpha: 0,
        },
        "-=0.1"
    );

// Experience Number Animation
gsap.registerPlugin(ScrollTrigger);

var circle = gsap.timeline({
    scrollTrigger: {
        trigger: ".experience-content",
        start: "-500 45%", // originally "top 20%"
        end: "70% top",
        toggleActions: "play none none reverse",
        markers: true,
    },
});

circle.to("circle.complete", {
    duration: 2,
    strokeDashoffset: 0,
    stagger: 0.65,
    ease: "power1.out",
}),
    circle.from(
        ".experience-img",
        {
            duration: 1,
            autoAlpha: 0,
        },
        "-=1.8"
    );

// News Blog Area Animation
// gsap.registerPlugin(ScrollTrigger);

// var newsBlog = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".news-blog-container",
//         start: "-100 85%",
//         end: "top top",
//         toggleActions: "play none none reverse",
//         markers: true,
//     },
// });

// newsBlog.from(".single-blog", {
//     duration: 3,
//     scale: 0.5,
//     stagger: 0.5,
//     autoAlpha: 0,
// });

// Lets Talk Area Animation
gsap.registerPlugin(ScrollTrigger);

var letsTalk = gsap.timeline({
    scrollTrigger: {
        trigger: ".lets-talk-content h5",
        start: "-100 85%",
        end: "top top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

letsTalk.from(".lets-talk-content h5", {
    duration: 1.5,
    autoAlpha: 0,
}),
    letsTalk.from(
        ".lets-talk-content .talk-btn a",
        {
            duration: 1,
            autoAlpha: 0,
            stagger: 0.3,
        },
        "-=1"
    );

// Home Circle Parallax
var talkParallax = gsap.timeline();

talkParallax.to(".talk-human", {
    scrollTrigger: {
        trigger: ".lets-talk-area",
        start: "top 80%",
        end: "60% 30%",
        markers: false,
        scrub: 0.5,
    },
    y: -130,
}),
    talkParallax.to(".talk-blue", {
        scrollTrigger: {
            trigger: ".lets-talk-area",
            start: "top 70%",
            end: "60% 30%",
            markers: false,
            scrub: 0.5,
        },
        y: -130,
    }),
    talkParallax.to(".talk-computer", {
        scrollTrigger: {
            trigger: ".lets-talk-area",
            start: "top 70%",
            end: "60% 30%",
            markers: false,
            scrub: 0.5,
        },
        y: -80,
    }),
    talkParallax.to(".talk-green", {
        scrollTrigger: {
            trigger: ".lets-talk-area",
            start: "top 80%",
            end: "60% 30%",
            markers: false,
            scrub: 0.5,
        },
        y: -130,
    }),
    talkParallax.to(".talk-yellow", {
        scrollTrigger: {
            trigger: ".lets-talk-area",
            start: "top 63%",
            end: "60% 30%",
            markers: false,
            scrub: 0.5,
        },
        y: -80,
    });
