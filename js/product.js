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

//Selecting the size
function selectSize(){
    document.getElementById('id').style.backgroundColor = 'red';
}
// selectSize();


//Gets the clicked product
function getProductById(){
    let html = `<div class="col-lg-8 col-md-6">
            <h1 class="mt-5">${selectedProduct[0].name}</h1>
            <h1 class="mt-5">$${selectedProduct[0].price}</h1>
            <p class="mt-4">Productos oficiales de Academlo</p>
            <h3 class="mt-5">Colores</h3>
            <img class="border" src="/img/item-playera-negra.jpg" alt="Colores" width="100px" height="100px" srcset="">
            <img src="/img/item-sudadera-gris-logo-rojo.jpg" width="100px" height="100px" alt="Colores" srcset="">
            <h3 class="mt-5">Tallas</h3>
                <div class="mt-4">
                    <span class="border p-3 " id="s" onclick="selectSize(id)">S</span>
                    <span class="border p-3 " id="m">M</span>
                    <span class="border p-3 " id="l">L</span>
                    <span class="border p-3 " id="xl">XL</span>
                    <span class="border p-3 " id="2xl">2XL</span>
                    <span class="border p-3 " id="3xl">3XL</span>
                </div>
            
            </div><!-- col-lg-8 col-md-6 -->

            <div class="col-lg-4 col-md-6 bg-light">
                <img src="/img/item-hodie-negro.png" width="400px" alt="" srcset="">
            </div>
            
            <div class="d-grid gap-2 col-6 mx-auto justify-content-md-center mt-5">
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    
                    <div class="offcanvas-body border-top mt-4">
                        <div class="col bg-light mb-4 p-3 pb-5">
                            <img src="/img/${selectedProduct[0].image}" width="100px" height="100px" alt="Colores" srcset="">
                            <p class="fw-bold">${selectedProduct[0].name} <span class="float-end">$${selectedProduct[0].price}</span> </p>
                            <p>Talla: S</p>
                            <p>Color: <img src="/img/item-color-red.png" alt="Item color Black" srcset=""></p>
                            <button>-</button>
                            1
                            <button>+</button>
                            <img src="/img/trashcan.png" alt="Trash can" class="border float-end">
                        </div>
                        <p class="fw-bold">Subtotal: <span class="float-end">$18</span></p>
                        <button class="btn btn-danger d-grid gap-2 col-6 mx-auto">Ir al carrito</button>
                    </div><!--  offcanvas-body -->
                </div><!--  offcanvas -->
            </div><!-- d-grid gap-2 col-6 mx-auto  -->`;
    let container = document.getElementById('productId');
    container.innerHTML = html;
}
getProductById();



