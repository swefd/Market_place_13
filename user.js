const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let productsGrid = document.getElementById('user-products-grid');

let url = "https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS"

//User details request
let userRequest = new XMLHttpRequest();

userRequest.open('GET', `${url}/users/${id}`);
userRequest.responseType = 'json'
userRequest.onload = function() {
    let user = userRequest.response;
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <h2>${user.surname}</h2>
        <img class="profile-img" src="${user.sellerPhoto}">
        <p>Balance: ${user.balance}$</p>
        
    `
}


//User products request
let productsRequest = new XMLHttpRequest();

productsRequest.open('GET', `${url}/products?sellerId=${id}`);
productsRequest.responseType = 'json'
productsRequest.onload = function() {
    let products = productsRequest.response;
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsGrid.innerHTML += `
            <div class="product">
                <h2 class='product-name'>${p.productName}</h2>
                <img class='product-photo' src='${p.productPhoto}' alt='${p.name}'>
                <p class='product-price'><b>Price: </b>${p.productPrice}$</p>
                <p class='product-description'><b>Description: </b>${p.productId}</p>
            </div>
        `;
    });
}

productsRequest.send();

userRequest.send();