
var flag;
document.addEventListener("DOMContentLoaded", function () {
    
    //cuando cliques al botón Registro
    document.getElementById("btRegistro").addEventListener("click", function(){
        flag = true;
       //recogida de valores
       var nombre=document.getElementById("tuNombre").value;
      
       var apellidos=document.getElementById("tuApellidos").value;

       var email=document.getElementById("tuEmail").value;
      /*  var tuDni=document.getElementById("tuDni");*/
       var tuNac=document.getElementById("tuNac").value;



       //validar que contenga letras nombre y los apellidos
       validadorGeneral(nombre,/^[a-zA-Z ñÑáéíóúÁÉÍÓÚ]+$/,"errorN" );
       validadorGeneral(apellidos,/^[a-zA-Z ñÑáéíóúÁÉÍÓÚ]+$/,"errorA" );
       validadorGeneral(email,/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,"errorE" );
       validaDni();
       console.log(tuNac);
       calculoEdad(tuNac);
       
      
       
       
        /*
        //expresiones regulares
        let email=document.getElementById("tuEmail").value;

       

        //http://estilow3b.com/ejemplos-comunes-de-expresiones-regulares-javascript/
        let pattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;//tengo que escribir una expr. regular
        //para validar email

        if(pattern.test(email)){//test solo da true o false
            
            document.getElementById("respuesta").innerHTML="Este email es valido";

        }else{
            document.getElementById("respuesta").innerHTML="No es un email";

        }
*/
        if(flag){
            document.getElementById("respuesta").innerHTML="Hola";
        }
        else{
            document.getElementById("respuesta").innerHTML="";
        }
        
    })

    
});

function validadorGeneral(value,pattern,myId){
    
        if(pattern.test(value)){
           document.getElementById(myId).innerHTML="";
        
        }else{ //hay error
            document.getElementById(myId).innerHTML="Este campo no es válido";
            flag = false;
        }
}

function validaDni(){
    let dni=document.getElementById("tuDni").value;
    if(dni.length==9){
        //console.log(dni);
        let numero=dni.substring(0,8);

        //console.log(numero);
        let letra=dni.substr(dni.length-1,1);
        //console.log(letra);
        if(isNaN(numero) || !isNaN(letra)){
            document.getElementById("errorD").innerHTML="Formato incorrecto";
            flag = false;
        }else{
            let calculo=numero % 23;//numero entre 0 i 22
            //console.log(calculo);
            let letras="TRWAGMYFPDXBNJZSQVHLCKE";
            //let letrasArray=Array("T","R",...);
            // console.log(letras[calculo]);//miro la letra de verdad
    
            if(letra.toUpperCase()==letras[calculo]){
                document.getElementById("errorD").innerHTML="";
            }else{
                document.getElementById("errorD").innerHTML="Tu dni es falso";
                flag = false;
    
            }
        }
        
    }else{
        document.getElementById("errorD").innerHTML="Tamaño incorrecto";
        flag = false;
    
    }
    
}

/**
 * obtener fecha de hoy
 * obtener fecha del input
 * 
 * obtener los milisegundos entre las dos fechas
 * factor de conversion para saber la edad
 */
function calculoEdad(value){
    //fecha actual
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let any = fecha.getFullYear();

    //fecha introducida
    console.log(value);

    //document.getElementById("errorF").innerHTML= fechaNac;
    
}
