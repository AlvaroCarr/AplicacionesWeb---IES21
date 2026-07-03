const form = document.querySelector('#form')

form.addEventListener('submit', function(Event){ 

    Event.preventDefault();

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = {
        nombre : document.querySelector('#nombre').value,
        apellido : document.querySelector('#apellido').value,
        email : document.querySelector('#email').value,
        contrasenia : document.querySelector('#contraseña').value,
        fecha : document.querySelector('#fecha').value
    }

    usuarios.push(usuario)

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

     window.location.href = "login.html"

})



   

    


