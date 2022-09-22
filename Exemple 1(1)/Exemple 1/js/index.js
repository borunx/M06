
document.addEventListener("DOMContentLoaded", function () {
//al principio no se ve ningun texto

    document.getElementById("para1").style.display="none";
    document.getElementById("para2").style.display="none";
    document.getElementById("para3").style.display="none";
    //programo el primer botón, oculto, enseño y calculo el factorial
    document.getElementById("btnEj1").addEventListener("click", function(){
       //mostro el primer paràgraf
        document.getElementById("para1").style.display="block";
        document.getElementById("para2").style.display="none";
        document.getElementById("para3").style.display="none";
        //faig el factorial 
        let factorial=100;
        let acumula=1;
        do{
            acumula= acumula*factorial;
            factorial--;
        }while(factorial!=0);
        
        //llamada a funciones
       // mensajes(acumula);
        mensajes(acumula,"El resultado es ");

        
       
    });

    //programo el segundo botón
    /*document.getElementById("btnEj2").addEventListener("click", function(){
        document.getElementById("para2").style.display="block";
        document.getElementById("para1").style.display="none";
        
    });*/

    document.getElementById("btnEj2").addEventListener("click", () =>{
        document.getElementById("para2").style.display="block";
        document.getElementById("para1").style.display="none";
        document.getElementById("para3").style.display="none";
    });
    document.getElementById("btnSuma").addEventListener("click", suma);
    //lo mismo con los otros botones de la calculadora

    document.getElementById("btnEj3").addEventListener("click", function(){
        document.getElementById("para2").style.display="none";
        document.getElementById("para1").style.display="none";
        document.getElementById("para3").style.display="block";
        document.getElementById("btnDni").addEventListener("click", validaDni);
    });
   
});

function suma(){
    let num1= Number.parseFloat(document.getElementById("num1").value);
    let num2=  Number.parseFloat(document.getElementById("num2").value);
   
    if(isNaN(num1) || isNaN(num2) ) {
        document.getElementById("resultado").innerHTML=
        '<div class="alert alert-danger" role="alert">Estos valores no son correctos!</div>';
    }else{
        
        document.getElementById("resultado").innerHTML=
    `<b>El resultado es </b> ${(num1+num2)}`;
   }

    
    
}

// 3 maneras equivalentes de crear una funcion
/*function mensajes(value, mymessage= "Error en ..."){
    document.getElementById("para1").innerHTML=
    mymessage + value;
}*/

//funcion anonima
/*var mensajes = function(value, mymessage="Error en ..."){
    document.getElementById("para1").innerHTML=
    mymessage + value;
}*/

//funcion arrow
var mensajes = (value, mymessage="Error en ...")=>{
    document.getElementById("para1").innerHTML=
    mymessage + value;
}

function validaDni(){
    let dni=document.getElementById("dni").value;
    if(dni.length==9){
        //console.log(dni);
        let numero=dni.substring(0,8);

        //console.log(numero);
        let letra=dni.substr(dni.length-1,1);
        //console.log(letra);
        if(isNaN(numero) || !isNaN(letra)){
            document.getElementById("resultat").innerHTML="Formato incorrecto";
        }else{
            let calculo=numero % 23;//numero entre 0 i 22
            //console.log(calculo);
            let letras="TRWAGMYFPDXBNJZSQVHLCKE";
            //let letrasArray=Array("T","R",...);
            // console.log(letras[calculo]);//miro la letra de verdad
    
            if(letra.toUpperCase()==letras[calculo]){
                document.getElementById("resultat").innerHTML="Tu dni "+dni+ " es verdadero";
            }else{
                document.getElementById("resultat").innerHTML=`Tu dni ${dni} es falso`;
    
            }
        }
        
    }else{
        document.getElementById("resultat").innerHTML="Tamaño incorrecto";
    
    }
    
}















