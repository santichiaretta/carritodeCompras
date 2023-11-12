const shopContent = document.getElementById("shopContent");
const seeCart = document.getElementById("seeCart");
const modalContainer = document.getElementById("modalContainer");
const cartQuantity = document.getElementById("cartQuantity");

let cart = JSON.parse(localStorage.getItem("Carrito")) || [];

const getProducts = async () => {
    try {
        const response = await fetch("data.json");
        const data = await response.json();

        data.forEach((product) => {
            let content = document.createElement("div");
            content.className = "card"
            content.innerHTML = `
        <img src= "${product.img}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} US$</p>
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
                            prod.amount++;
                        }
                    })
                } else {
                    cart.push({
                        id: product.id,
                        img: product.img,
                        name: product.name,
                        price: product.price,
                        amount: product.amount,
                    });
                }
                console.log(cart);
                console.log(cart.length);
                cartCounter();
                saveLocal();
            });
        });
    } catch (error) {
        console.error(error)
    }
}

getProducts();

const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(cart));
};
