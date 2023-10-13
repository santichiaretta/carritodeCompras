const productos = [
    { nombre: "wayfarer", precio: 73000 },
    { nombre: "aviator", precio: 77000 },
    { nombre: "ferrari", precio: 70000 },
    { nombre: "clubmaster", precio: 73000 },
    { nombre: "round", precio: 77000 },
    { nombre: "erika", precio: 75000 },
    { nombre: "evolve", precio: 70000 },
]

let carrito = []
let eleccion = prompt("Hola, bienvenido/a. Desea comprar algún producto?(si/no)")

while (eleccion != "si" && eleccion != "no") {
    alert("Por favor, escriba si o no.")
    eleccion = prompt("Desea comprar algo?(si/no)")
}

if (eleccion == "si" || eleccion == "sI" || eleccion == "SI" || eleccion == "Si") {
    alert("Estos son nuestros productos:")
    let todoslosProductos = productos.map((producto) => " " + producto.nombre + " $" + producto.precio)
    alert(todoslosProductos.join(" | "))
} else if (eleccion == "no" || eleccion == "nO" || eleccion == "NO" || eleccion == "No") {
    alert("Hasta otra vez será. Gracias!")
}

while (eleccion == "si" || eleccion == "sI" || eleccion == "SI" || eleccion == "Si") {
    let producto = prompt("Agrega un producto a tu carrito:")
    let precio = 0
    if (producto == "wayfarer" || producto == "aviator" || producto == "ferrari" || producto == "clubmaster" || producto == "round" || producto == "erika" || producto == "evolve") {
        switch (producto) {
            case "wayfarer":
                precio = 73000;
                break;
            case "aviator":
                precio = 77000;
                break;
            case "ferrari":
                precio = 70000;
                break;
            case "clubmaster":
                precio = 73000;
                break;
            case "round":
                precio = 77000;
                break;
            case "erika":
                precio = 75000;
                break;
            case "evolve":
                precio = 70000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuántas unidades desea agregar?"))
        carrito.push({ producto, unidades, precio })
    } else {
        alert(producto.toUpperCase() + " no coincide con ninguno de nuestros modelos")
    }

    eleccion = prompt("Desea seguir comprando?(si/no)")
    if (eleccion == "no" || eleccion == "nO" || eleccion == "NO" || eleccion == "No"){
        alert("Gracias por su compra, hasta pronto!")
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(carrito)
console.log(`El total a pagar es: ${total}`)