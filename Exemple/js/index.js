document.addEventListener("DOMContentLoaded", function () {
    //P1: CREAR EL PARRAGRAFO
    const para = document.createElement("p");
    //P2:CREO UN TEXTO Y PONGO ID A para
    para.id="para1";
    para.style.backgroundColor="red";
    const node = document.createTextNode("This is new.");
    //P3: vincular PARRAFO CON TEXTO
    para.appendChild(node);//añado el texto creado a mi paragrafo recien creado

    //P4: HACER QUE CUELGUE DE MI DOCUMENTO - DIV1, QUE SI EXISTE
    const element = document.getElementById("div1"); //el div existente añade al parragrafo con su texto
    element.appendChild(para);//insertar dentro del html
});
