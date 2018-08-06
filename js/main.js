
let introTxt = " Hello , I'm Linda. A Front-End Web Developer . Based in Port Harcourt, Nigeria.";
let intro = document.querySelector(".hello");
let txtLength = introTxt.length;
let i = 0;

//Creating the typing animation on homepage
function TypeWriter(){
    if ( i <= introTxt.length) {
      intro.innerHTML += introTxt.charAt(i);
        i++;
      setTimeout(TypeWriter, 50);
        
    }
    
}
TypeWriter();

/* Remove = () => {
    if(introTxt.length == txtLength){
        intro.innerHTML = "";
        setTimeout(Remove,5000);
    }
}
Together =() =>{
    TypeWriter();
    Remove();
    setTimeout(Together,7000);
}



if (Remove){
    Together();
}*/
  