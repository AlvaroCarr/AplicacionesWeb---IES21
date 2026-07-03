const form = document.querySelector('#form')

form.addEventListener('submit', function(Event)
{

    Event.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let email = document.querySelector('#email').value
    let contraseña = document.querySelector('#contraseña').value



    let usuarioEncontrado = usuarios.find(usuario => 

        usuario.email === email &&
        usuario.contrasenia === contraseña
    )

    if(usuarioEncontrado){
            
        sessionStorage.setItem("email", usuarioEncontrado.email)
        sessionStorage.setItem("sesion", "true");

        alert('inicio de sesion correcto')

        window.location.href = '../index.html'

        
    }
    else
    {
         alert('no se logro iniciar sesion')
        
    }
}) 


    

