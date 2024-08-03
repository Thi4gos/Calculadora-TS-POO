"use strict";
// Seleciona o display e assegura que é um HTMLElement
const display = document.querySelector('.display') as HTMLElement | null;

// Seleciona múltiplos elementos e assegura que são HTMLElements
const numbers = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;

// Seleciona um único elemento e assegura que é um HTMLElement com checagem de nulidade
const buttonEqual = document.querySelector('#equal') as HTMLElement | null;

// Corrige a classe `funtionB` para o nome correto
const buttonFunctions = document.querySelectorAll('.functionB') as NodeListOf<HTMLElement>;

// Verifica se display foi encontrado antes de usar
if (display) {
    // Adiciona eventos de clique aos botões de números
    numbers.forEach(element => {
        element.addEventListener('click', () => {
            if (display) {  // Verifica se display ainda é um HTMLElement
                display.textContent = display.textContent ?? '' + element.textContent ?? ''; // Adiciona uma verificação de null
            }
        });
    });
}

class calc {
    terms
    constructor(terms: string[]) {
        this.terms = terms
    }
    addTerm(element: HTMLElement) {
        if (element.textContent != "*" &&
            element.textContent != "-" && 
            element.textContent != "+" &&
            element.textContent != "/") {
            this.terms.push(element.textContent ?? "")
        }  
    }
        
}