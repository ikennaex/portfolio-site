// Show menu while hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// Menu show - Validate if menu should show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu close
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove mobile menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Accordion Skills
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills-content skills-close"
    }
    if (itemClass === "skills-content skills-close"){
        this.parentNode.className = "skills-content skills-open"
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

// Qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tabs =>{
    tabs.addEventListener('click', () =>{
        const target = document.querySelector(tabs.dataset.target)

        tabContents.forEach(tabContents => {

            tabContents.classList.remove("qualification-active")
        })
        target.classList.add("qualification-active")
        
        tabs.forEach(tabs =>{
             tabs.classlist.remove("qualification-active")
        })

        tabs.classList.add("qualification-active")
    })
})

// Services Modal
const modalViews = document.querySelectorAll(".services-modal"),
      modalBtns  = document.querySelectorAll(".services-button"),
      modalCloses = document.querySelectorAll(".services-modal-close")

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove("active-modal")
        })
    })
})

// Portfolio Swiper

let swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});