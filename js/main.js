
let introTxt = "Hello , I'm Linda. A Front-End Web Developer . Based in Port Harcourt, Nigeria.";
let intro = document.querySelector(".hello");
var body = document.querySelector("body");
let i = 0;

function typeWriter(){
    if (i < introTxt.length) {
        intro.innerHTML += introTxt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
        
    }
    //intro.innerHTML = "";
}

body.onload = typeWriter();