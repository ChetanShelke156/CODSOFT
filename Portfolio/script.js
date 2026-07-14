/* Typing Text */

let text = [
    "Frontend Developer",
    "Web Developer",
    "BCA Student",
    "CodSoft Intern"
];

let index = 0;

let typing = document.getElementById("typing");

function changeText(){

    typing.innerHTML = text[index];

    index++;

    if(index == text.length){
        index = 0;
    }

}

changeText();

setInterval(changeText,2000);
/* Contact Form */

let form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your message has been sent successfully.");

    form.reset();

});


/* Active Menu */

let links = document.querySelectorAll("nav ul li a");

links.forEach(function(link){

    link.addEventListener("click", function(){

        links.forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});
