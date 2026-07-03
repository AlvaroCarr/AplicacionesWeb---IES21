let logut = document.querySelector('#Logout')


logut.addEventListener('click', ()=> 
{

    sessionStorage.removeItem("email")
    sessionStorage.setItem("sesion", "false");

    window.location.href = 'login.html';

})