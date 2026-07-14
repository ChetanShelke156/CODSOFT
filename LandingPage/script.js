// ==========================
// SMOOTH SCROLL
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const section = document.querySelector(id);

        section.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();

});


// ==========================
// CHANGE NAVBAR ON SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";

    }

    else{

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

    }

});
// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    let currentSection = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 100;

        if(window.scrollY >= sectionTop){

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + currentSection){

            link.classList.add("active");

        }

    });

});


// ==========================
// SIMPLE IMAGE HOVER
// ==========================

const images = document.querySelectorAll("img");

images.forEach(function(image){

    image.addEventListener("mouseover", function(){

        image.style.transform = "scale(1.03)";

        image.style.transition = "0.3s";

    });

    image.addEventListener("mouseout", function(){

        image.style.transform = "scale(1)";

    });

});


// ==========================
// PAGE LOADED
// ==========================

window.onload = function(){

    console.log("Landing Page Loaded Successfully");

};
