function mudarH1 () {
const novaH1 = document.querySelector("H1");
novaH1.textContent = "Olá Mundo";
}

function verificarsite() {
let site = prompt("Login");
if (site === "comedy") {
    alert ("Star Comedy for you");
} else {
  alert("nothing");
  window.location.href = "http://www.google.com"  
}

}

document.querySelector("img").addEventListener ("click",verificarsite);