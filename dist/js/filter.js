'use strict';

const agriCkbx = document.getElementById('agri-checkbox');
const gardCkbx = document.getElementById('gard-checkbox');
const productSectionAgri = document.getElementById('agricolture-enology-section');
const productSectionGard = document.getElementById('gardening-section');
const productSectionAgriTitle = document.getElementById('agricolture-enology-section-title');
const productSectionGardTitle = document.getElementById('gardening-section-title');

function filter() {
if (agriCkbx.checked && !gardCkbx.checked) {
productSectionGard.classList.add('d-none');
productSectionGardTitle.classList.add('d-none');
} else if (!agriCkbx.checked && gardCkbx.checked) {
productSectionAgri.classList.add('d-none');
productSectionAgriTitle.classList.add('d-none');
} else {
productSectionAgri.classList.remove('d-none');
productSectionGard.classList.remove('d-none');
productSectionAgriTitle.classList.remove('d-none');
productSectionGardTitle.classList.remove('d-none');
}
}

agriCkbx.addEventListener('click', filter);
gardCkbx.addEventListener('click', filter);