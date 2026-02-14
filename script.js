
 var  B = function verifPassword() {
    var A = document.querySelector("#password").value ;
    var D = document.querySelector("#name").value ;
     if (A == "Caca") {
         window.location.href = "index2.html";
     } else {
         alert("Sorry " + D + ", le mot de Passe est inccoret.");
     }
} ;
document.querySelector("#loginBtn").addEventListener("click", B) ;

var lol = function indice (){
    var p = document.createElement("div");
    var p2 = document.createTextNode("p")= "lol";
    p.appendChild(p2);
};
button = document.querySelector("#indice").addEventListener("click", lol);


