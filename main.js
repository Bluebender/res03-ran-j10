let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let bouton1 = document.getElementById("bouton1");
let bouton2 = document.getElementById("bouton2");
let bouton3 = document.getElementById("bouton3");


bouton1.addEventListener("click", function(){
    section1.classList.add("passive");
    section1.classList.remove("active");
    section2.classList.add("active");
    section2.classList.remove("passive");
});

bouton2.addEventListener("click", function(){
    section2.classList.add("passive");
    section2.classList.remove("active");
    section3.classList.add("active");
    section3.classList.remove("passive");
});

bouton3.addEventListener("click", function(){
    section3.classList.add("passive");
    section3.classList.remove("active");
    section1.classList.add("active");
    section1.classList.remove("passive");
});