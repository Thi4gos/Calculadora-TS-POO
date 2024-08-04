"use strict";

// Seleciona o display e assegura que é um HTMLElement
const display = document.querySelector('.display') as HTMLElement | null;

// Seleciona múltiplos elementos e assegura que são HTMLElements
const numbers = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;

// Seleciona um único elemento e assegura que é um HTMLElement com checagem de nulidade
const buttonEqual = document.querySelector('#equal') as HTMLElement | null;

const backspace = document.querySelector("#clear") as HTMLElement | null;

const buttonFunctions = document.querySelectorAll('.functionB') as NodeListOf<HTMLElement>;

// Verifica se display foi encontrado antes de usar
if (!display) {
    throw new Error("Display not found");
}

class Calc {
    terms: string[];

    constructor(terms: string[]) {
        this.terms = terms;
    }

    addTerm(term: string) {
        if (term !== "*" &&
            term !== "-" && 
            term !== "+" &&
            term !== "/") {
            this.terms.push(term ?? "");
            console.log(this.terms);     
        }  
    }

    lessTerm() {
        this.terms.pop() as string
        console.log(this.terms)
    }
}

// Instancia a classe Calc
const calc = new Calc([]);

// Adiciona os eventos de clique para os botões de números
numbers.forEach(element => {
    element.addEventListener('click', () => {
        const text = element.textContent;
        if (text) {
            calc.addTerm(text)
            display.textContent = calc.terms; //array principal ser um ter o temos como arrays,
            // assim fazendo referencia como calc.terms[0] ou calc.terms[1] etc..
        }
    });
});

backspace?.addEventListener('click', () => {
    calc.lessTerm()
})