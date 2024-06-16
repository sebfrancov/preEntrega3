class Compra {
    constructor(carritoCompras){
        this.carrito = carritoCompras
    }
    obtenerTotal(){
        if (this.carrito.lenght > 0){
            return this.carrito.reduce ((acumulador, tiempo)=> acumulador + tiempo.precio, 0)
        }
    }
}
