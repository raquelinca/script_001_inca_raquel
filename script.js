function addClass(containerDiv, className) {
    console.log(containerDiv.classList);
    containerDiv.classList.add(className);
}

function createMatrix(dimension, container, divisorFizz, divisorBuzz, divisorFizzBuzz) {
    let counter = 1;
    for (let i = 0; i < dimension; i++) {
        const div = document.createElement("div");
        addClass(div, "demo");

        for (let j = 0; j < dimension; j++) {
            const content = document.createElement("div");
            addClass(content, "content");
            content.textContent = counter;

            fizz(divisorFizz, content, counter);
            buzz(divisorBuzz, content, counter);
            fizzbuzz(divisorFizzBuzz, content, counter);

            div.appendChild(content);
            counter++;
        }
        container.appendChild(div);
    }
}

function applyFizzBuzz(divisor, square, number) {
    fizz(divisor, square, number);
}

function fizz(divisor, square, number) {
    if (number % divisor === 0) {
        addClass(square, "fizz");
    }
}

function buzz(divisor, square, number) {
    if (number % divisor === 0) {
        addClass(square, "buzz");
    }
}

function fizzbuzz(divisor, square, number) {
    if (number % divisor === 0) {
        addClass(square, "fizzbuzz");
    }
}

const DIMENSION = 10;
const FIZZ_DIVISOR = 2;
const BUZZ_DIVISOR = 3;

function buttonClicked() {
    console.log("me hicieron");

    const dimensionInput = document.getElementById("dimension");
    const fizzInput = document.getElementById("fizz-divisor");
    const buzzInput = document.getElementById("buzz-divisor");

    const dimensionValue = parseInt(dimensionInput.value);
    const fizzValue = parseInt(fizzInput.value);
    const buzzValue = parseInt(buzzInput.value);

    console.log(`El valor de dimension es: ${dimensionValue}`);
    console.log(`El valor de fizz es: ${fizzValue}`);
    console.log(`El valor de buzz es: ${buzzValue}`);

    const container = document.querySelector(".container");
    createMatrix(dimensionValue, container, fizzValue, buzzValue, fizzValue * buzzValue);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("ya se cargó el DOM");

    const btnGenerate = document.getElementById("generate");
    btnGenerate.addEventListener("click", buttonClicked);
});



