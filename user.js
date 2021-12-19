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
    `
}

userRequest.send();