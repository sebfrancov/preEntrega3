const tableBody = document.querySelector("table tbody")
const importeTotalCarrito = document.querySelector("td#importeTotalCarrito")

const carrito = JSON.parse(localStorage.getItem("carritoCompras"))

function calcularTotalCarrito() {
    if (carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, prod)=> acc + prod.precio, 0)
        importeTotalCarrito.textContent = `$ ${montoTotalCarrito.toLocaleString("es-COL")}`
    }
}

function armarTablaCarrito(producto) {
    return `<tr>
                <td class="imagen-carrito">${producto.imagen}</td>
                <td>${producto.nombre}</td>
                <td>$ ${producto.precio.toLocaleString("es-COL")}</td>
                <td class="quitar-carrito" title="Clic para quitar del carrito">🙅‍♂️</td>
            </tr>`
}

function cargarProductosDelCarrito() {
    tableBody.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((producto)=>  tableBody.innerHTML += armarTablaCarrito(producto))
        calcularTotalCarrito()
    }
}

cargarProductosDelCarrito() 
