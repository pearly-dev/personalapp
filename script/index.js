
const delay = async(ms= 1000)=> new Promise(resolve => setTimeout(resolve, ms));

async function makeAloopWait(){
    var items = document.querySelectorAll('.chat_btn')
    for (let i = 0; i < items.length; i++) {
       
        items[i].classList.add('fade_in');

        //code
        await delay(1000)
        
    }
}

makeAloopWait();

const menu = document.querySelector(".nav_menu");
const menuItems = document.querySelectorAll(".nav_link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("active");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
  })
)


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
}
$(window).scroll(function () {
    if (isScrolledIntoView($('.buisness_process')))
    {
      $('.modal-box').toggleClass("show-modal");
      $('body').toggleClass('show-modal')
      document.body.style.overflow = 'hidden';
    
     $('.fa-times').click(function(){
     $('.modal-box').toggleClass("show-modal");
     $('body').toggleClass('show-modal')
     document.body.style.overflow = 'auto';
          
    });
           $(this).unbind('scroll');
          }
        // Uncomment out the line below to unbind the scroll event if the 
        // execution of this code is only desired once.
        // $(this).unbind('scroll');
    
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

