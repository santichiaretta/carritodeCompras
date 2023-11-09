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
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <span class="subtract"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="add"> + </span>
        <p>Total: ${product.cantidad * product.precio} $</p>
        `;
        modalContainer.append(cartContent);

        let subtract = cartContent.querySelector(".subtract");

        subtract.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            cartNotification();
        })

        let add = cartContent.querySelector(".add");

        add.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            cartNotification();
        })

        let deleteIt = document.createElement("span");
        deleteIt.innerText = "❌";
        deleteIt.className = "delete-product"
        cartContent.append(deleteIt);

        deleteIt.addEventListener("click", deleteProduct);
    });


    const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};

seeCart.addEventListener("click", cartNotification);

const deleteProduct = () => {
    const foundId = cart.find((element) => element.id);

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