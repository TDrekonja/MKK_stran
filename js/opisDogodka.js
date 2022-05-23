gsap.registerPlugin(ScrollTrigger);


/*gsap.to('.row',{
    scrollTrigger: {
        trigger:".krogla",
        toggleActions: "restart pause reverse pause"
    },
    x:'-20%',
    duration:3
});*/


gsap.utils.toArray('.row').forEach((section, index) => {
    const [x, xEnd] = (index % 2) ? [section.offsetWidth,-100 ] : [section.scrollWidth * -1, 100];
    gsap.fromTo(section, {  x  }, {
        x: xEnd,
        scrollTrigger: {
            trigger: section,
            scrub: 0.5
        }
    });
});