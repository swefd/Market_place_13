const XHR = new XMLHttpRequest()

const productGrid = document.getElementById('products-grid');

let productsArray = [];


url = "https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/db"
productsURL = "https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/products"


XHR.open("GET", productsURL)

XHR.responseType = 'json'

XHR.send()

XHR.onload = function() {

    productsArray = XHR.response

    XHR.response.forEach(product => {
        productGrid.innerHTML += `
        <div class="product">
        <h2 class="product-name"> ${product.productName} </h2>
        <img class="product-photo" src="${product.productPhoto}">
        <p class="product-price">
        <b>Pice: </b>
        ${product.productPrice}
        
       
        <a href='userProfile.html?id=${product.sellerId}'>Seller profile</a>

        <button onclick="addProductToCart(${product.productId})">Buy</button>
        </div>
    `
    });

}


//Cart

let cart = [];
let cartProd = document.getElementById('cart-products');



function openCart() {
    cartProd.classList.toggle('hide');
}


function addProductToCart(id) {
    let product = productsArray.find(function(p) {
        return p.productId == id;
    })

    cart.push(product);
    drawCartProducts();

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById('cart-button').classList.add('active');
    setTimeout(function() {
        document.getElementById('cart-button').classList.remove('active');
    }, 500);
}

function drawCartProducts() {
    if (cart.length === 0) return cartProd.innerHTML = 'Cart is empty';
    cartProd.innerHTML = null;
    let sum = 0;
    cart.forEach(function(p) {
        cartProd.innerHTML += `
            <p><img src="${p.productPhoto}"> ${p.productName} |${p.price}$</p>
            <hr>
        `;
        sum += p.productPrice;
    });
    cartProd.innerHTML += `
        <p>Total Price: ${sum}$</p>
        <button onclick="buyAll()">Buy All</button>
    `;
}