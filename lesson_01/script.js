// Global scope
// Modular scope

// const jedi = "Anakin";
// export default jedi;

// const sum = (a, b) => a + b;
// export default sum;

// export const jedi = "Anakin";
// export default (a, b) => a + b;

// export const jedi = "Anakin";
// export const jedi_master = {
//     name: "Yoda",
//     rank: "Master",
//     lightsaber: "Green"
// }
// export default (a, b) => a + b;

// Code Reuse
// D.R.Y.
// export default (a, b) => a + b;


// Object Destructuring
// 1
// const jedi_master = {
//     name: "Yoda",
//     rank: "Master",
//     lightsaber: "Green"
// }
// const { lightsaber } = jedi_master;
// console.log(lightsaber);
// console.log(jedi_master);

// 2
// const jedi_master = {
//     name: "Yoda",
//     rank: "Master",
//     age: 900,
//     lightsaber: "Green"
// }
// const show_rank = ({ rank }) => `My rankis ${rank}`;
// console.log(show_rank(jedi_master));

// 3
// const jedi_master = {
//     name: "Yoda",
//     rank: "Master",
//     age: 900,
//     lightsaber: "Green"
// }
// const show_enemy = ({ enemy = "Palpatine" }) => `My enemy is ${enemy}`;
// console.log(show_enemy(jedi_master));

// 4 costruzione del ogetto
// const name = "Yoda";
// const rank = "Master";
// const lightsaber = "Green";
// const jedi_master = {
//     name,
//     rank,
//     lightsaber
// }
// console.log(jedi_master);

// Array Destructuring
// const array = ["Yoda", "Windu", "Anakin"];
// const [yoda, windu, anakin] = array;
// console.log(yoda);
// console.log(windu);
// console.log(anakin);

// or

// const array = ["Yoda", "Windu", "Anakin"];
// const [uno, due, tre] = array;
// console.log(uno);
// console.log(due);
// console.log(tre);

// non e importante il nome ma la posizione
// const array = ["Yoda", "Windu", "Anakin"];
// const [due, tre, uno] = array;
// console.log(uno);
// console.log(due);
// console.log(tre);

// non tutti valori di array (solo primi due)
// Array Destructuring
// const array = ["Yoda", "Windu", "Anakin"];
// const [yoda, windu] = array;
// console.log(yoda);
// console.log(windu);

// Array Destructuring
// Spread Operator
// 1
// const array = ["Yoda", "Windu", "Anakin", "Obi-wan", "Ahsoka"];
// const [yoda, windu, ...other_jedis] = array;
// console.log(yoda);
// console.log(windu);
// console.log(other_jedis);

// 2
// const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers));

// 3
// const numbers = [1, 2, 3, 4, 5];
// console.log(...numbers);

// 4
// const all_numbers = (...numbers) => console.log(numbers);
// all_numbers(10, 20, 30);

// 5 (somma di tutti numeri)
// const all_numbers = (...numbers) => numbers.reduce((acc, n) => acc + n);
// console.log(all_numbers(10, 20, 30));

// Object Destructuring 6.1
// const name = "Yoda";
// const rank = "Master";
// const lightsaber = "Green";
// const jedi_master = {
//     name,
//     rank,
//     lightsaber
// }
// export default jedi_master;


// Object Cloning
// Shallow Copy 
// const jedi = {
//     name: "Obi-wan",
//     lightsaber: "Blue",
//     rank: "Master",
//     pupil: {
//         name: "Anakin",
//         lightsaber: "Blue",
//         rank: "Student"
//     }
// }
// const shallow_copy = { ...jedi };
// shallow_copy.name = "Yoda"; //cambiamo valori
// shallow_copy.pupil.lightsaber = "Red"; //cambiamo valori
// console.log(jedi);
// console.log(shallow_copy);



// Deep Copy (con metodo JSON.parse)
const jedi = {
    name: "Obi-wan",
    lightsaber: "Blue",
    rank: "Master",
    pupil: {
        name: "Anakin",
        lightsaber: "Blue",
        rank: "Student"
    }
}
const shallow_copy = { ...jedi };
const deep_copy = JSON.parse(JSON.stringify(jedi)); //metodo JSON.parse
shallow_copy.name = "Yoda";
shallow_copy.pupil.lightsaber = "Red";
console.log(jedi);
console.log(shallow_copy);