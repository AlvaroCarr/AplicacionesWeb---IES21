let contenedor = document.querySelector('.cards');
let categoria = document.querySelectorAll('.categoria');


fetch("/assets/js/productos.json") 

.then(response => response.json())

.then(productos => 
    
{    

    for (let i = 0; i < categoria.length; i++)

    {
        
        categoria[i].addEventListener('click', function()
        {
            let CatSelect = categoria[i].textContent;

            contenedor.innerHTML ="";

            let ProdPorCateg = productos.filter(productos => productos.categoria === CatSelect)
            
            for ( let i = 0; i < ProdPorCateg.length; i++) 
            {

            contenedor.innerHTML +=

            `
                    <div class="producto">

                            <img src="${ProdPorCateg[i].imagen}" alt="">

                            <div class = "info">

                                <p class="titulo">${ProdPorCateg[i].titulo}</p>
                                <p class="desc">${ProdPorCateg[i].desc}</p>
                                <p class="precio">${ProdPorCateg[i].precio}</p>
                                <button class="agregar">${ProdPorCateg[i].agregar}</button>
                                <button class="Menos"> - </button>
                                <span class="Cant">0</span>
                                <button class="Mas"> + </button>

                            </div>

                            

                            
                    </div>

                `;

                
                let btnAgregar = document.querySelectorAll('.agregar');

                for (let i = 0; i < btnAgregar.length; i++) 
                {
                    btnAgregar[i].addEventListener('click', function()

                        {
                            let mailUsuario = sessionStorage.getItem("email")

                            if (mailUsuario != null) {

                            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                            let prodCompra = {

                                "imagen": ProdPorCateg[i].imagen,
                                "titulo": ProdPorCateg[i].titulo,
                                "precio" : ProdPorCateg[i].precio,
                                "cantidad" : Number(document.querySelectorAll('.Cant')[i].textContent),
                                "usuario" : mailUsuario 
                            };

                            carrito.push(prodCompra);

                            localStorage.setItem("carrito", JSON.stringify(carrito));

                            alert('Agregado al carrito');}

                            else {

                            alert('No hay sesion iniciada');

                            }

                        })
                    
                }
            }


                let Menos = document.querySelectorAll('.Menos');
                let Cant = document.querySelectorAll('.Cant');
                let Mas = document.querySelectorAll('.Mas');

                for(let i = 0; i < Mas.length; i++)
        
                {
                    Mas[i].addEventListener('click', function()
                    {
                        Cant[i].textContent = Number(Cant[i].textContent) + 1;
                    })

                    Menos[i].addEventListener('click', function()
                    {

                        let CantAct = Number(Cant[i].textContent)

                        if(CantAct  > 0)
                        {
                            Cant[i].textContent = CantAct  - 1
                        }
                    })
                }
        })

        






    }



}

)