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
    eleccion = prompt("Desea comprar algo?")
}

if (eleccion == "si" || eleccion == "sI" || eleccion == "SI" || eleccion == "Si") {
    alert("Estos son nuestros productos:")
    let todoslosProductos = productos.map((producto) => " " + producto.nombre.toUpperCase() + " $" + producto.precio)
    alert(todoslosProductos)
} else if (eleccion == "no" || eleccion == "nO" || eleccion == "NO" || eleccion == "No") {
    alert("Hasta otra vez será. Gracias")
}

while (eleccion != "no" || eleccion != "nO" || eleccion != "NO" || eleccion != "No") {
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
        let unidades = parseInt(prompt("Cuántas unidades quiere agregar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert(producto.toUpperCase() + " no coincide con ninguno de nuestros modelos")
    }
}