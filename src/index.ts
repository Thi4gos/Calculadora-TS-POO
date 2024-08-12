"use strict";
import { display, numbers, buttonEqual, backspace, buttonFunctions } from "./access"
// Verifica se display foi encontrado antes de usar
if (!display) {
    throw new Error("Display not found");
}
class Calc {
    expression: string[][] // A expreção que está sendo construída no momento, um array de arrays
    terms: string[] // Os termos da expressão
    // Construído com base em lógica matemática, manipulando termos
    // Termos passados como strings no array principal
    constructor(terms: string[], expression: string[][]) {
        this.terms = terms;
        this.expression = expression;
    }
    contructTerm(element: string) {
        const Tm: string[] = []
        Tm.push(element)
        //Fazer um termo, preparando para adicioná-lo
    }
    addTerm(Tm: string[]) {
         this.expression.push(Tm)
    }

    lessTerm() {
        this.expression.pop()
    }
    
}
// Instancia a classe Calc
const calc = new Calc([], []);

// Adiciona os eventos de clique para os botões de números
numbers.forEach(element => {
    element.addEventListener('click', () => {
        if (calc.terms.length >= 1) {
            const formText = element.textContent as string
            calc.contructTerm(formText)
            const final = calc.expression[0].flat().join(' '); // Flatten the array and join elements
            console.log(final)
             //FAZER APARECER O ARRAY NO DISPLAY
           // display.textContent = calc.terms; //array principal ser um array de arrays,
            // assim fazendo referencia como calc.terms[0] ou calc.terms[1] etc..
        }
    });
});

backspace?.addEventListener('click', () => {
    calc.lessTerm()
})