'use strict'

import {products} from './data.js';

//Get the id clicked
let param = window.location.href;
let id = param.toString().split('=');

//Get the product from products
let selectedProduct = [];
for (const key in products) {
    if(products[key].id == id[1]){
        selectedProduct.push(products[key]);
    }
}

let cart = JSON.parse(localStorage.getItem('item')) || [];

//Gets the clicked product
function getProductById(){
    let html = `
            <h1 class="mt-5">${selectedProduct[0].name}</h1>
            <h1 class="mt-5">$${selectedProduct[0].price}</h1>
    <button class="btn btn-danger btn-lg mt-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onclick="addToCart(${selectedProduct[0].id})">A&ntilde;adir al carrito</button>

            `;
    let container = document.getElementById('productId');
    container.innerHTML = html;
}
getProductById();
generateCartList();

function generateCartList(){
    //let tempCart = JSON.parse(localStorage.getItem('item')) || [];
    let html = '';
    for(let i = 0; i < cart.length; i++){
        html += `<div class="col bg-light mb-4 p-3 pb-5">
            <img src="/img/${cart[i].image}" width="100" alt="Colores" srcset="">
            <p class="fw-bold">${cart[i].name} <span class="float-end">$${cart[i].price}</span> </p>
            <p>Talla: ${cart[i].size}</p>
            <p>Color: ${cart[i].color}</p>
            <button id="decreaseBtn" type="button" title="Decrease"><i class="bi bi-dash"></i></button>
            <span id="mycounter">1</span>
            <button id="increaseBtn" type="button" title="Increase"><i class="bi bi-plus"></i></button>
            <img src="/img/trashcan.png" alt="Trash can" class="border float-end">
        </div>
    <p class="fw-bold">Subtotal: <span class="float-end">$${cart[i].price}</span></p>`;
    }
    let container = document.getElementById('listCart');
    container.innerHTML = html;
}

function addToCart(id){
    //Call back function
    function cbFindId(products){
        return products.id == id;
    }
    let selectedItem = products.find(cbFindId);
    
    cart.push(selectedItem);
    localStorage.setItem('item', JSON.stringify(cart));
}

    //Incrementing items to the cart
    //     window.onload = function(){
    //     let clickButton = document.getElementById('increaseBtn');
    //     clickButton.onclick = incrementCounter;

    //     let unclickButton = document.getElementById('decreaseBtn');
    //     unclickButton.onclick = decreaseCounter;
    // }


    // var counterVal = 1;

    //     incrementCounter = function() {
    //         updateDisplay(++counterVal);
    //     }

    //     decreaseCounter = function() {
    //         updateDisplay(--counterVal);
    //     }

    //     function updateDisplay(val) {
    //         document.getElementById("mycounter").innerHTML = val;
    //     }

window.addToCart = addToCart; //Esto hace que esta funcion sea visible en el html
window.generateCartList = generateCartList;


