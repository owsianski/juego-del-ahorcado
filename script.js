String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.
length); }  

const palabras = [ "casa" , "perro" , "otorrinolaringologo" , "auto" , "programar" , "sabor" , "ahorcado" , "sabiduria" , "estudiar" , "conocimiento" ];
const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");
let contardorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;
document.querySelector("#calcular").addEventListener("click", ()=>
{  
    const letra = document.querySelector("#letra").value;
    let haFallado = true;


    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
            haFallado = false;
        }
    }
    if(haFallado){
        contardorFallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(204*contardorFallos) + "px 0 ";
        if(contardorFallos == 4){
            alert("Perdiste, vuelve a intentarlo")
        }
        else{
            if(palabraConGuiones.indexOf("_" <0)){
            document.querySelector("#victoria").style.display = "flex";
            }
        }
    }


    document.querySelector("#output").innerHTML = palabraConGuiones;

    document.querySelector("#letra").value = "";
    document.querySelector("#letra").focus = "";

});