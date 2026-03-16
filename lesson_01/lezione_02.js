// Functional Programming
// Built-in function
// Math.max();
// Math.min();
// Math.round();

// let array = [1, 2, 3];
// array.push(); //aggiungere in coda un nuovo elemento
// array.pop(); // rimuovere e restituire ultimo elemento della array
// array.reverse(); //capovolge un array

// Pure functions
// const sum = (a, b) => a + b;

// const anotherSum = (a) => { //not pure
//     let b = 5;
//     return a + b;
// }
// const anotherOneSum = (a) => { //not pure
//     return a + 5;
// }
// const anotherSecondSum = (a, b) => { //not pure
//     console.log(a + b);
// }
// High-order Function
// 1
// const sum = (a) => {
//     // Closure
//     return (b) => {
//         return a + b;
//     }
// }

// const first_step = sum(5);
// const second_step = first_step(10);
// console.log(second_step);
// // or
// const result = sum(10)(20);
// console.log(result);

// 2
// const high_order_function = (a, callback) => {
//     return callback(a);
// }
// // const multiply_by_five = (n) => n * 5;
// // const result = high_order_function(5, multiply_by_five);
// // console.log(result);
// // or
// const result = high_order_function(5, (n) => n * 5);
// console.log(result);


// Array methods: map, filter, reduce

// .map() funzione di ordine superiore che lancia callback su ogni elemento
// // 1
// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map((n) => n * 2);

// console.log(double);
// // 2
// const custom_map = (array, callback) => {
//     const new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         new_array.push(callback(array[i]));
//     }
//     return new_array;
// }
// const double = custom_map([1, 2, 3, 4, 5], (n) => n * 2);
// console.log(double);

// // .filter()
// // 1
// const numbers = [1, 2, 3, 4, 5];
// const more_than_three = numbers.filter((n) => n > 3);
// console.log(more_than_three);

// // 2
// const custom_filter = (array, callback) => {
//     const new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             new_array.push(array[i]);
//         }
//     }
//     return new_array;
// }
// const more_than_three = custom_filter([1, 2, 3, 4, 5], (n) => n > 3);
// console.log(more_than_three);
