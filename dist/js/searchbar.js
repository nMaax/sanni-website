'use strict'

function search() {
    let input = document.getElementById("searchbar").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let product of products) {

        let productName, brand;
        try {
            productName = product.getElementsByClassName('product-name')[0].innerText.toLowerCase();
        } catch(err) {
            productName = '';
        }
        try {
            brand = product.getElementsByClassName('product-brand')[0].innerText.toLowerCase();
        } catch(err) {
            brand = '';
        }

        if (productName.includes(input) || brand.includes(input)) {
            product.classList.remove('d-none');
        } else {
            product.classList.add('d-none');
        }
    }
}

document.getElementById("searchbar").addEventListener("input", search);