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

    /*
    let productName = products[i].getElementsByClassName("fw-bolder")[0].innerText.toLowerCase();
    let brand = products[i].getElementsByClassName("card-body")[0].getElementsByTagName("p")[0].innerText.toLowerCase();

    if (productName.indexOf(input) > -1 || brand.indexOf(input) > -1) {
        products[i].style.display = "";
    } else {
        products[i].style.display = "none";
    }*/
}

document.getElementById("searchbar").addEventListener("input", search);