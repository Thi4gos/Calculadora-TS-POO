"use strict";
// Seleciona o display e assegura que é um HTMLElement
const display = document.querySelector('.display');
// Seleciona múltiplos elementos e assegura que são HTMLElements
const numbers = document.querySelectorAll('.button');
// Seleciona um único elemento e assegura que é um HTMLElement com checagem de nulidade
const buttonEqual = document.querySelector('#equal');
// Corrige a classe `funtionB` para o nome correto
const buttonFunctions = document.querySelectorAll('.functionB');
// Verifica se display foi encontrado antes de usar
if (display) {
    // Adiciona eventos de clique aos botões de números
    numbers.forEach(element => {
        element.addEventListener('click', () => {
            var _a, _b;
            if (display) { // Verifica se display ainda é um HTMLElement
                display.textContent = (_b = (_a = display.textContent) !== null && _a !== void 0 ? _a : '' + element.textContent) !== null && _b !== void 0 ? _b : ''; // Adiciona uma verificação de null
            }
        });
    });
}
class calc {
    constructor(terms) {
        this.terms = terms;
    }
    addTerm(element) {
        var _a;
        if (element.textContent != "*" &&
            element.textContent != "-" &&
            element.textContent != "+" &&
            element.textContent != "/") {
            this.terms.push((_a = element.textContent) !== null && _a !== void 0 ? _a : "");
        }
    }
}
