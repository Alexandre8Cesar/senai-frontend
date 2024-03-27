
     document.querySelector("button").addEventListener("click", validarLogin);
     function validarlogin() {
         let login = document.querySelector("#login").value;
         console.log(login);
         let password = document.querySelector("#password").value;
         console.log(password);
         let msg = document.querySelector("span");
    
         
         if (login === "senai" && password === "010203") {
            msg.innerHTML = "Acesso Permitido! <a href='index.html'>Clique Aqui</a>";
            msg.style = "background-color: blue";
            window.location.href = "index.html";
         } else {
            msg.innerText = "Login ou senha incorretos!";
            msg.style = "background-color: red";
         }
         
         return false;
         
     }
  