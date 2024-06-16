const divContenedor = document.getElementById("divContenedor")
const btnCarrito = document.getElementById("carrito")
const inputSearch = document.getElementById("inputSearch")
const spanCarrito = document.getElementById("productosEnCarrito")

const carrito = JSON.parse(localStorage.getItem("carritoCompras"))

function retornarCardHTML(producto) {
    return `<div class="div-card">
                <div class="imagen">${producto.imagen}</div>
                <div class="producto">${producto.nombre}</div>
                <div class="importe">$ ${producto.precio}</div>
                <button id="${producto.id}" class="add-to-cart">Agregar</button>
            </div>`
}

function cargarProductos(array) {
    if (array.length > 0) {
        divContenedor.innerHTML = ""
        array.forEach((producto)=> divContenedor.innerHTML += retornarCardHTML(producto) )
        activarEventosClick()
        if (carrito.length > 0) {
            actualizarTotalCarrito()
        }
    } else {
        divContenedor.innerHTML = retornarCardError()
    }
}

function actualizarTotalCarrito() {
    spanCarrito.textContent = carrito.length
}

function activarEventosClick() {
    const botonesAgregar = document.querySelectorAll("button.add-to-cart")

    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach((boton)=> {
            boton.addEventListener("click", ()=> {
                const productoSeleccionado = productos.find((producto)=> producto.id == boton.id)
                carrito.push(productoSeleccionado)
                actualizarTotalCarrito()
                localStorage.setItem("carritoCompras", JSON.stringify(carrito))
            })
        })
    }
}

cargarProductos(productos)


btnCarrito.addEventListener("click", ()=> {
    if (carrito.length > 0) {
        location.href = "checkout.html"
    } else {
        alert("⛔️ Cargue al menos un producto en el carrito.")
    }
})

btnCarrito.addEventListener("mousemove", ()=> {
    if (carrito.length > 0) {
        btnCarrito.title = "Productos en carrito: " + carrito.length
    }
})

inputSearch.addEventListener("search", ()=> {
        let resultado = productos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.toLowerCase()))
        localStorage.setItem("ultimaBusqueda", inputSearch.value)
        if (resultado.length > 0) {
            cargarProductos(resultado)
        }
})