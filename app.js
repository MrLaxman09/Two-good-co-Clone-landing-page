let locoMotiveAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);    

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();


}
locoMotiveAnimation();

gsap.to(".svgPart svg", {
    transform: "translateY(-100%)",
    height: "82px",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 80%",
        end: "top 30%",
        // markers: true
    }
    
})

// gsap.to(".text-menu",{
//     transform:"translateY(-100%)",
//     opacity : 0,
//     ScrollTrigger:{
//         trigger:"#page1",
//         scroller:"#main",
//         start:'top 0',
//         end:"top -5%",
//         scrub:8,
//         // markers:true
//     }
// })


function videoContainerAnimation() {
    let videoContainer = document.querySelector('#video-container');
    let playBtn = document.querySelector('#play')

    videoContainer.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            scale: 1,
            opacity: 1
        })

    })
    videoContainer.addEventListener("mouseleave", () => {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0
        })
    })
    videoContainer.addEventListener('mousemove', (dets) => {
        gsap.to(playBtn, {
            left: dets.x - 70,
            top: dets.y - 70
        })
    })
    videoContainer.addEventListener('touchmove', (dets) => {
        const touch = dets.touches[0];
        gsap.to(playBtn, {
            left: touch.clientX,
            top: touch.clientY10
        });
    });
}
videoContainerAnimation();

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out",
        stagger: 0.3
    })
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.2,
        duration: 0.3,

    })
}
loadingAnimation();

document.addEventListener('mousemove', (dets) => {
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y
    })
})
document.addEventListener('touchmove', (dets) => {
    const touch = dets.touches[0];
    gsap.to("#cursor", {
        left: touch.clientX,
        top: touch.clientY
    });
});



document.querySelector("#child1").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)"
    })
})
document.querySelector("#child1").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)"
    })
})
document.querySelector("#child4").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)"
    })
})
document.querySelector("#child4").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)"
    })
})

