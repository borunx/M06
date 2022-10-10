document.addEventListener("DOMContentLoaded", function () {

    //display forms
    document.getElementById("login-form").style.display="block";
    document.getElementById("register-form").style.display="none";

    //current date and time
    setInterval(show_date_hour,1000);

    
    //login form 
    document.getElementById("login-btn").addEventListener("click",function(){
        
        var login_user = document.getElementById("login-usertxt").value;

        var pass_user = document.getElementById("login-passwordtxt").value;

    })

    
    //register form
    document.getElementById("register-btn").addEventListener("click",function(){

        document.getElementById("login-form").style.display="none";
        document.getElementById("register-form").style.display="block";

    })
});