// nav MENU

(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"), 
    navMenu = document.querySelector(".nav-menu"), 
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu); 
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() { 
        navMenu.classList.add("open");
        bodyScrollingToggle();
        }
        function hideNavMenu() { 
        navMenu.classList.remove("open");
        fadeOutEffect();
        }

        function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
        document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
 
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')) {
            if(event.target.hash !== ""){
                event.preventDefault(); 
                const hash=event.target.hash;
                document.querySelector(".section.active").classList.add("hide"); 
                document.querySelector(".section.active").classList.remove("active");
                document.querySelector (hash).classList.add("active"); 
                document.querySelector (hash).classList.remove("hide");
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                if(navMenu.classList.contains ("open")){
                event.target.classList.add("active","inner-shadow"); 
                event.target.classList.remove("outer-shadow", "hover-in-shadow");
                hideNavMenu();
                }
                else{
                    let navitems=navMenu.querySelectorAll(".link-item"); 
                    navItems.forEach((item) =>{ 
                    if(hash === item.hash) {
                    item.classList.add("active","inner-shadow");
                    item.classList.remove("outer-shadow", "hover-in-shadow");
                }
            })
            fadeOutEffect();
                }
               window.location.hash=hash; 
           }
        }
    })
 })();

 function bodyScrollingToggle() {
    document.body.classList.toggle("hidden-scrolling");
    }


// about section tabs
 (() =>{

const aboutSection = document.querySelector(".about-section"), 
tabsContainer = document.querySelector(".about-tabs");

tabsContainer.addEventListener("click", (event) =>{
/* if event.target contains 'tab-item' class and not contains 
'active' class */
if(event.target.classList.contains("tab-item")&&
!event.target.classList.contains("active")){
    const target=event.target.getAttribute("data-target");
// deactivate existing active 'tab-item'
tabsContainer .querySelector(".active").classList.remove("outer-shadow"
,"active");
// activate new 'tab-item'
event.target.classList.add("active", "outer-shadow"); 
// deactivate existing active 'tab-content'
aboutSection.querySelector(".tab-content.active").classList.remove("active");
// activate new 'tab-content'
aboutSection.querySelector(target).classList.add("active");
        }
     })
})();
// ==============================Testimonial Slide===============================

(() =>{
    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides= sliderContainer.querySelectorAll(".testi-item"),
    slideWidth=sliderContainer.offsetWidth,
    prevBtn=document.querySelector(".testi-slider-nav .prev"), 
    nextBtn=document.querySelector(".testi-slider-nav .next");

    activeSlide=sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    


     // set width of all slides 
    slides.forEach((slide) =>{ 
    slide.style.width=slideWidth +"px";
    })
    // set width of sliderContainer
sliderContainer.style.width = slideWidth * slides.length + "px";

nextBtn.addEventListener("click", () =>{ 
    if(slideIndex === slides.length-1){
    slideIndex = 0;
    } 
    else{
    slideIndex++;
    }
    slider();
    })
    prevBtn.addEventListener("click", () =>{
    if(slideIndex === 0) {
    slideIndex = slides.length-1;
    } 
    else{
    slideIndex--;
    }
    slider();
    })
    function slider(){
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft= - (slideWidth * slideIndex)+"px";

    }
slider();
})();

// hide===================
(() =>{
    const sections = document.querySelectorAll(".section"); 
    sections.forEach((section) =>{
    if(!section.classList.contains ("active")){ 
    section.classList.add("hide");
    }
})
})();

window.addEventListener("load", () =>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },600)
})


