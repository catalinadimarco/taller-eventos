let div = document.querySelector("div");
let btn = document.querySelector("button");

div.addEventListener("click", function(e) {
    if (e.target === btn){
        console.log("Boton clickeado");
    } else {
        alert("Hola! Soy el div");
    }
});