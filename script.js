'use strict';

// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});