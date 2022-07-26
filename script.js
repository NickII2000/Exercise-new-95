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

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    if (localStorage.getItem('isChecked')) {
        localStorage.removeItem('isChecked');
    } else {
        localStorage.setItem('isChecked', true);
    }
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Alex',
    age: 25,
};


const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);
// localStorage.setItem('alex', person);

console.log(JSON.parse(localStorage.getItem('alex')));
// console.log(localStorage.getItem('alex'));


// Exercise 95, Регулярные выражения

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите Ваше имя');

// const reg = /n/ig;

// Флаги:
// i - не зависит от регистра
// g - глобал, найти несколько вхождений
// m - включает многострочный режим

// console.log(ans);
// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass);
// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

// const ans = prompt('Введите Ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans));

// \d - цифры
// \w - Соответствует любому цифробуквенному символу включая нижнее подчёркивание. Эквивалентен [A-Za-z0-9_].
// \s - пробелы

// \D - НЕцифры
// \W - НЕ Соответствует любому цифробуквенному символу включая нижнее подчёркивание. Эквивалентен [A-Za-z0-9_].

// const ans = prompt('Введите Ваше число');
// const reg = /\d/g;

// console.log(ans);
// console.log(ans.match(reg));

// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

const str = 'My name is R2D2';
console.log(str.match(/\W/g));
console.log(str.match(/\D/g));