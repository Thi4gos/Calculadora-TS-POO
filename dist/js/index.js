"use strict";
// Seleciona o display e assegura que é um HTMLElement
const display = document.querySelector('.display');
// Seleciona múltiplos elementos e assegura que são HTMLElements
const numbers = document.querySelectorAll('.button');
// Seleciona um único elemento e assegura que é um HTMLElement com checagem de nulidade
const buttonEqual = document.querySelector('#equal');
const backspace = document.querySelector("#clear");
const buttonFunctions = document.querySelectorAll('.functionB');
// Verifica se display foi encontrado antes de usar
if (!display) {
    throw new Error("Display not found");
}
class Calc {
    constructor(terms) {
        this.terms = terms;
    }
    addTerm(term) {
        if (term !== "*" &&
            term !== "-" &&
            term !== "+" &&
            term !== "/") {
            this.terms.push(term !== null && term !== void 0 ? term : "");
            console.log(this.terms);
        }
    }
    lessTerm() {
        this.terms.pop();
        console.log(this.terms);
    }
}
// Instancia a classe Calc
const calc = new Calc([]);
// Adiciona os eventos de clique para os botões de números
numbers.forEach(element => {
    element.addEventListener('click', () => {
        const text = element.textContent;
        if (text) {
            calc.addTerm(text);
            display.textContent = text;
        }
    });
});
backspace === null || backspace === void 0 ? void 0 : backspace.addEventListener('click', () => {
    calc.lessTerm();
});
