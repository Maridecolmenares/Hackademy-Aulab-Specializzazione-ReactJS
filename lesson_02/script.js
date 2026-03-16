// Esercizio 1 
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

const calculate = (a, b, operation) => {
    return operation(a, b);
}
console.log(calculate(10, 2, add));
console.log(calculate(10, 2, multiply));
console.log(calculate(10, 2, subtract));
console.log(calculate(10, 2, divide));

// Esercizio 2

const creaConvertitoreValuta = (tasso) => {
    return (importo) => {
        return importo * tasso;
    }
}
const euro_to_uah = creaConvertitoreValuta(50);
const uah_to_euro = creaConvertitoreValuta(1 / 50);

console.log(euro_to_uah(10));
console.log(euro_to_uah(50));

console.log(uah_to_euro(500));
console.log(uah_to_euro(2500));