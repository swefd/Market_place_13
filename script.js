const XHR = new XMLHttpRequest()

const productGrid = document.getElementById('products-grid');

url = "https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/db"
productsURL = "https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/products"


XHR.open("GET", productsURL)

XHR.responseType = 'json'

XHR.send()

XHR.onload = function() {



    XHR.response.forEach(product => {
        productGrid.innerHTML += `
        <div class="product">
        <h2 class="product-name"> ${product.productName} </h2>
        <img class="product-photo" src="${product.productPhoto}">
        <p class="product-price">
        <b>Pice: </b>
        ${product.productPrice}

        <button onclick="addProductToCart(1)">Buy</button>
        </div>
    `
    });

}