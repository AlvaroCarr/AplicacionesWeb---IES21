let contenedor = document.querySelector('.carrito');
let totalGralHTML= document.querySelector('.total');

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let totalGralJS = 0

let mailUsuario = sessionStorage.getItem("email")

let carritoUsuario = carrito.filter(carrito => carrito.usuario === mailUsuario)


for (let i = 0; i < carritoUsuario.length; i++) 
{
    
    let NumPrecio = Number(carritoUsuario[i].precio.replace("$", ""));
    let NumCant = Number(carritoUsuario[i].cantidad);
    let subtotal = NumPrecio * NumCant;

    totalGralJS += subtotal;

    contenedor.innerHTML += `

                            <article class="articulo">
                                <img src="${carritoUsuario[i].imagen}" alt="">
                                <h3>${carritoUsuario[i].titulo}</h3>
                                <p>Precio : ${carritoUsuario[i].precio}</p>
                                <p>Cantidad : ${carritoUsuario[i].cantidad}</p>
                                <p>Subtotal : $ ${subtotal}</p>
                                <button class="Eliminar">Eliminar</button>
                            </article>
    
    `

}

totalGralHTML.textContent = `TOTAL : $ ${totalGralJS}`




let btnEliminar = document.querySelectorAll('.Eliminar')


for ( let i = 0; i < btnEliminar.length; i++) 
{

    btnEliminar[i].addEventListener('click', function()

        {
            let productoEliminar = carritoUsuario[i]; 

            let posicion = carrito.findIndex(carrito => carrito.usuario === 
            productoEliminar.usuario && carrito.titulo === productoEliminar.titulo); 
            
            carrito.splice(posicion , 1)

            localStorage.setItem("carrito", JSON.stringify(carrito))

            alert('Eliminado')

            location.reload();

        }

    )
    
}