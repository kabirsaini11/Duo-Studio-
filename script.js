function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector('.cursor')
var main = document.querySelector('.main')
document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x + 30+'px'
    crsr.style.top = dets.y+ 30+'px'
})

const tl = gsap.timeline({
    duration:1,
    scrollTrigger : {
        trigger:".page1 h1",
        scroller:'.main',
        // markers:true,
        start:'top 40%',
        end:'top 15%',
        scrub:5
    }
})
tl.to('.page1 h1',{
    x:-100,
},'anim')
tl.to('.page1 h2',{
    x:100,
},'anim')
tl.to('.page1 video',{
    width:'100%',
},'anim')

const tl2 = gsap.timeline({
    duration:1,
    scrollTrigger : {
        trigger:".page1 h1",
        scroller:'.main',
        // markers:true,
        start:'top -70%',
        end:'top -90%',
        scrub:5
    }
})
tl2.to('.main',{
    backgroundColor:"#fff"
})

const tl3 = gsap.timeline({
    duration:1,
    scrollTrigger : {
        trigger:".page3",
        scroller:'.main',
        // markers:true,
        start:'top 10%',
        end:'top 50%', 
        scrub:7
    }
})
tl3.to('.containerImage',{
    width:'105%',
    height:'100%',
},'anim')



const tl4 = gsap.timeline({
    duration:1,
    scrollTrigger : {
        trigger:".page1 h1",
        scroller:'.main',
        // markers:true,
        start:'top -280%',
        end:'top -300%',
        scrub:7
    }
})

tl4.to('.main',{
    backgroundColor:'#0f0d0d'
})
var boxes = document.querySelectorAll('.box');

boxes.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
        var att = elem.getAttribute('data-image');
        crsr.style.width = '35vh'; // Adjust the size to suit your design
        crsr.style.height = '43vh';
        crsr.style.borderRadius = '0'; // Keep it square
        crsr.style.backgroundImage = `url(${att})`;
        crsr.style.backgroundSize = 'cover'; // Ensure the image covers the element
        crsr.style.backgroundPosition = 'center'; // Ensure the image is centered
        crsr.style.transition = '0.3s ease'; // Smooth transitions
        crsr.style.opacity = 1
    });
    
    elem.addEventListener('mouseleave', function() {
        crsr.style.width = '2.5vh'; // Reset the cursor size
        crsr.style.height = '2.5vh';
        crsr.style.opacity = 1
        crsr.style.borderRadius = '50%'; // Reset to circle
        crsr.style.backgroundImage = 'none'; // Remove the image
    });
});
