//arrays with days and months

const days = ["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"];
const months = ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Septembre","Octubre","Novembre","Decembre"];

function show_date_hour(){
    //define date class
    const date = new Date();

    //Get day, week-day, month and year
    var day = date.getDate();
    var week_day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    //Get hours, minutes and seconds 
    var hours = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    //print date and hour
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }
    document.getElementById("hour").innerHTML="Hora: " + hours + ":" + minute + ":" + seconds;

    document.getElementById("date").innerHTML="Fecha: " + days[week_day] + " " + day + " de " + months[month] + " de " + year;
}

function validaUsuari(value){

    var pattern=/^[A-ZÑa-zñáéíóúàèòÁÉÍÓÚÀÈÒ'çÇ ]+$/;//este patron o cualquier otro
    if(pattern.test(value)){
        return true;//correcto, no hay errores
    }{
        return false;//hay errores!!!
    }
 
       
}