const cartNotification = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h2 class="modal-header-title">Carrito de compras</h2>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";
    modalHeader.append(modalButton);

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    cart.forEach((product) => {
        let cartContent = document.createElement("div");
        cartContent.className = "modal-content"
        cartContent.innerHTML = `
        <img src= "${product.img}">
        <h3>${product.name}</h3>
        <p>${product.price} US$</p>
        <span class="subtract"> - </span>
        <p>Cantidad: ${product.amount}</p>
        <span class="add"> + </span>
        <p>Total: ${product.amount * product.price} US$</p>
        <span class="delete-product"> ❌ </span>
        `;
        modalContainer.append(cartContent);

        let subtract = cartContent.querySelector(".subtract");
        subtract.addEventListener("click", () => {
            if (product.amount !== 1) {
                product.amount--;
            }
            saveLocal();
            cartNotification();
        })

        let add = cartContent.querySelector(".add");
        add.addEventListener("click", () => {
            product.amount++;
            saveLocal();
            cartNotification();
        })

        let deleteIt = cartContent.querySelector(".delete-product");
        deleteIt.addEventListener("click", () => {
            deleteProduct(product.id);
        });
    });

    const total = cart.reduce((acc, el) => acc + el.price * el.amount, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: ${total} US$`;
    modalContainer.append(totalBuying);
};

seeCart.addEventListener("click", cartNotification);

const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    cart = cart.filter((cartId) => {
        return cartId !== foundId;
    });
    cartCounter();
    saveLocal();
    cartNotification();
};

const cartCounter = () => {
    cartQuantity.style.display = "block";

    const cartLength = cart.length;

    localStorage.setItem("cartLength", JSON.stringify(cartLength));

    cartQuantity.innerText = JSON.parse(localStorage.getItem("cartLength"));
};

cartCounter();
