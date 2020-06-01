var boton = document.querySelector("button")
var p1 = document.getElementById("p1")
var b = document.querySelector("body")
/*boton.addEventListener("click", function(){
    p1.insertAdjacentHTML("beforeend", "<p>BEEP</p>")
    b.classList.toggle("color")
})*/

var seEjecutaEvento = function(){
    p1.insertAdjacentHTML("beforeend", "<p>BEEP</p>")
    b.classList.toggle("color")
}
boton.addEventListener("click", seEjecutaEvento)