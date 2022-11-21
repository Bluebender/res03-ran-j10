let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let bouton1 = document.getElementById("bouton1");
let bouton2 = document.getElementById("bouton2");
let bouton3 = document.getElementById("bouton3");
let input = document.querySelectorAll("section:first-of-type input");
let input2 = document.querySelectorAll("section:nth-of-type(2) input");
let input3 = document.querySelectorAll("section:last-of-type input");

bouton1.addEventListener("click", function(){
    section1.classList.add("passive");
    section2.classList.remove("passive");
    section3.classList.add("passive");
    for (let i=0; i<input.length; i++){
        input[i].setAttribute("disabled", "true");
    }
    
});

bouton2.addEventListener("click", function(){
    section1.classList.add("passive");
    section2.classList.add("passive");
    section3.classList.remove("passive");
    for (let i=0; i<input2.length; i++){
        input2[i].setAttribute("disabled", "true");
    }
});

bouton3.addEventListener("click", function(){
    section1.classList.remove("passive");
    section2.classList.add("passive");
    section3.classList.add("passive");
    for (let i=0; i<input3.length; i++){
        input3[i].setAttribute("disabled", "true");
    }
});

