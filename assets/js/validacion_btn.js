let login = document.querySelector('#Login')
let logout = document.querySelector('#Logout')
let registro = document.querySelector('#Registro')

let sesion = sessionStorage.getItem("sesion")

if(sesion === 'true') 
{

    logout.style.display = 'block'
    login.style.display = 'none'
    registro.style.display = 'none'
}

else
{

    logout.style.display = 'none'
    login.style.display = 'block'
    registro.style.display = 'block'
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; 

let emailSesion = sessionStorage.getItem("email"); 

let usuarioActivo = usuarios.find(usuario => usuario.email === emailSesion); 

logout.addEventListener("mouseover", function () { 

    if (usuarioActivo != undefined) { 

        logout.title = usuarioActivo.nombre; 

    } 

}); 