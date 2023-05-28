function resultado(){
    var inputText = document.querySelector(".input-texto").value;  
    if (inputText=== ""){
        document.getElementById("botonCopiar").style.display = "none";
        document.getElementById("munheco").style.display ="block";
    } else{
        document.getElementById("botonCopiar").style.display = "block";
        document.getElementById("munheco").style.display = "none";
    }

}

function quitarImagen() {
    document.getElementById("munheco").style.display = "none";

}

function encriptar (){
    const caracteres = /[A-Z0-9~()!@#$%&*_+|{}[]áéíóúàèìòù'\/?><^:"`;.,]/g;
    var texto = document.querySelector(".input-texto").value;
    if (texto == ""){
        alert("Debe escribir para encriptar.");
        

    } 
       else if (texto.match(caracteres) != texto.match(caracteres)){
        alert("Solo se acepta texto en minúscula y sin tildes.");
    } 
       else{
        
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector(".input-texto").value;
        
        
        document.getElementById("mensaje").style.visibility = "visible";
        document.getElementById("boton-copiar").style.visibility = "visible";
        
        quitarImagen();
        
      
    }
}
    
var boton1 = document.querySelector(".encriptar"); boton1.onclick = encriptar;

function desencriptar (){
    
     var texto = document.querySelector(".input-texto").value; 
     if (texto == ""){
        alert("Debe escribir para desencriptar.");
      }
     else {
      var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi,      "u"); 
     document.querySelector(".text-input-salida").value = textoCifrado; 
     document.querySelector(".input-texto").value;
     
     document.getElementById("mensaje").style.visibility = "visible";
     document.getElementById("boton-copiar").style.visibility = "visible";
     } 
} 
 
var boton2 = document.querySelector(".desencriptar"); 
boton2.onclick = desencriptar;

function copiarTexto(){
 
    var copiar = document.getElementById("mensaje");
    copiar.select();
    copiar.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copiar.value);
    alert("Se copió el texto:  " + copiar.value);
    console.log(alert);
}

var botonCopiar = document.querySelector("#boton-copiar");
 
botonCopiar.onclick = copiarTexto;
