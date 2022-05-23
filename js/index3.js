gsap.registerPlugin(ScrollTrigger);


const sections = document.getElementsByTagName("section");
const navLi = document.getElementsByClassName("nav-item");
window.onscroll = () => {
    var current = 0;
    $(sections).each(function (index, section){
        const sectionTop = section.offsetTop;
        if (pageYOffset+20 >= sectionTop) {
            current = index-1
        }
    });
    $(navLi).each(function (index, li){
        li.classList.remove("active");
    });
    navLi[current].classList.add("active");
};

const slike=["url('../images/kanal_dron.jpg')","url('../images/ekipa.jpg')","url('../images/flirt.jpg')"];
const opisi=["Kanal","Mi :)","Ker lahko"];

$(".oblacki").each(function (index, element){
    var ani = new TimelineLite({paused:true});
    ani.to(element,0.5,{innerText:opisi[index],lineHeight:"50vh"})
        .to(element, 0.2, {backgroundImage:slike[index],delay:0.2})
        .to(element,0.5,{color:"white"})

    element.animation = ani;
})


$(".oblacki").mouseenter(function(){
    this.animation.play();
})

$(".oblacki").mouseleave(function(){
    this.animation.reverse();
})


gsap.utils.toArray('.galerija').forEach((section, index) => {
    const [x, xEnd] = (index % 2) ? [section.offsetWidth,-100 ] : [section.scrollWidth * -1, 100];
    gsap.fromTo(section, {  x  }, {
        x: xEnd,
        scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            ease: "power2"
        }
    });
});

gsap.from("#summerLogo",  { x: innerWidth * 1.1 },{opacity:0,duration:2})


gsap.timeline({
    scrollTrigger: {
        trigger:"#plaza",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom top",
        snap: {
            snapTo: 1 / (this.length - 3),
            inertia: false,
            duration: {min: 0.1, max: 0.1}
        },
        //toggleClass: "active",
        ease: "power2"
    }
})
    .from("#nocna",  { y: innerHeight * 1.5 ,delay:1})
    .from("#skoki",  { y: innerHeight * 1.5 ,delay:1})

gsap.timeline({
    scrollTrigger: {
        trigger:"#plaza",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom top",
        snap: {
            snapTo: 1 / (this.length - 3),
            inertia: false,
            duration: {min: 0.1, max: 0.1}
        },
        //toggleClass: "active",
        ease: "power2"
    }
})
    //.to(".dSpodi",  { backgroundColor: "#3FFCA1"})
    //.from("#dSP",  { y: innerHeight * 1.5 ,backgroundColor: "#3FFCA1"})
    //.to(".dSpodi",  { backgroundColor: "rgb(255,120,81)"})
    .from("#dSS",  { y: innerHeight * 1.5})
    //.to(".dSpodi",  { backgroundColor: "#33EEFE"})
    .from("#dSK",  { x: innerWidth * 1.5})
    //.from("#dSK",  { y: innerHeight * 1.5 ,backgroundColor: "#33EEFE"})
    //.to(".dSpodi",  { backgroundColor: "#33EEFE"})

gsap.timeline({
    scrollTrigger: {
        trigger:"#plaza",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom top",
        snap: {
            snapTo: 1 / (this.length - 3),
            inertia: false,
            duration: {min: 0.1, max: 0.1}
        },
        //toggleClass: "active",
        ease: "power2"
    }
})
    .from("#dZS",  { x: innerWidth * 1.5})
    .from("#dZK",  { y: innerHeight * -1.5,opacity: 0})

gsap.timeline({
    scrollTrigger: {
        trigger:"#vecjePrireditve",
        scrub: 0.5
    }
})
    .to("#summerLogo",  { delay:0.5,y: "90vh"})
    .set("#summerLogo", { attr: { src: "images/logo2.png" } })
    .to("#summerLogo",  { y: "160vh"})




gsap.from("#kontaktS",30,{backgroundPosition: "0px -100%",
    //autoRound:false,
    ease: Linear.easeNone,repeat: -1});