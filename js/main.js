
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
  
//Form Validation
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);