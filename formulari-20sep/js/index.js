document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("btnValidar").addEventListener("click",function(){

        valNombre();
        valEmail();

    });
    
})

function valNombre(){
    let nombre = document.getElementById("nombre").value;

    if (isNaN(nombre)) {
        console.log("Nombre OK!");
    }
    else{
        console.log("Nombre incorrecto");
    }
}

function valEmail(){
    let email = document.getElementById("email").value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
        console.log("El email " + email + " es correcto");        
    }
    else{
        console.log("Email incorrecto");
    }
}