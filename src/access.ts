// access.ts
"use strict";

// Seleciona os elementos do DOM
const display = document.querySelector('#display') as HTMLElement | null;
const numbers = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;
const buttonEqual = document.querySelector('#button-equal') as HTMLElement | null;
const backspace = document.querySelector('#backspace') as HTMLElement | null;
const buttonFunctions = document.querySelectorAll('.function-button') as NodeListOf<HTMLElement>;

// Exporta as variáveis
export { display, numbers, buttonEqual, backspace, buttonFunctions };
