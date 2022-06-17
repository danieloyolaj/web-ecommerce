'use-strict'

import {products} from './data.js';

let cart = JSON.parse(localStorage.getItem('item')) || [];



function generateCartList(){
    let html = '';
    for(let i = 0; i < cart.length; i++){
        html += `
        <div class="col-2 bg-light p-4">
            <img src="/img/${cart[i].image}" width="100" alt="item-color-black" srcset="">
        </div>
        <div class="col-10 bg-light p-4">
        <h4>${cart[i].name}</h4>
        <h4>$${cart[i].price}</h4>
        <p>Talla: ${cart[i].size}</p>
        <p>Color: ${cart[i].color}</p> 
        <button>-</button>
        1
        <button>+</button>
        <button class="border float-end" type="button" onclick="removeItem(${cart[i].id})"><img src="/img/trashcan.png" alt="Trash can"></button>
        </div>
        <hr>

        `;
    }
    let container = document.getElementById('listCart');
    container.innerHTML = html;
}
generateCartList();

function removeItem(id){
    let filtered = cart.filter(x => x !== id);
    cart.splice(filtered, 1);
    generateCartList();
}

function clearLocalStorage(){
    localStorage.clear();
}



window.clearLocalStorage = clearLocalStorage;
window.removeItem = removeItem;

//Multiplying the price
// let newValue = document.querySelector('#mycounter').value;
// newPrice = Number(selectedProduct[0].price) * counterVal;
// console.log(selectedProduct[0].price);
// console.log(counterVal);
// console.log("New price: " + newPrice);