"use strict"

import {products} from './data.js';


function generateProducts(productsArray) {
    let html = '';
    for(let i = 0; i < productsArray.length; i++) {
        html += `<div class="col">
        <div class="card bg-light" style="width: 18rem;">
            <img src="/img/${productsArray[i].image}" class="card-img-top" alt="Hoodie">
            <div class="card-body">
                <h5 class="card-title rounded float-end">$${productsArray[i].price}</h5>
                <h5 class="card-title">${productsArray[i].name}</h5>
                <p class="card-text">${productsArray[i].logo}</p>
                <img src="/img/item-color-black.png" alt="Item color Black" srcset="">
                <img src="/img/item-color-red.png" alt="Item color Black" srcset="">
                <img src="/img/item-color-white.png" alt="Item color Black" srcset="">
                <a href="product.html?id=${productsArray[i].id}" class="btn btn-danger">Ver producto</a>
            </div>
        </div>
        </div>`;
        // localStorage.setItem('product', JSON.stringify();
    }
    const container = document.getElementById('products');
    container.innerHTML = html;
}   
generateProducts(products);




