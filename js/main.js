// Al agregar productos desde el botón "comprar" los va guardando en el almacenamiento local y, a su vez, los muestra en el carrito de compras.

const shopContent = document.getElementById("shopContent");
const seeCart = document.getElementById("seeCart");
const modalContainer = document.getElementById("modalContainer");
const cartQuantity = document.getElementById("cartQuantity");

let cart = JSON.parse(localStorage.getItem("Carrito")) || []; 

const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(cart));
};

products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let buy = document.createElement("button");
    buy.innerText = "Comprar";
    buy.className = "comprar"

    content.append(buy);

    buy.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            })
        } else {
            cart.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad
            });
        }
        console.log(cart);
        console.log(cart.length);
        cartCounter();
        saveLocal();
    });
});