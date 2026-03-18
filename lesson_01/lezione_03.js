// // Async JS

// // setInterval

// let counter = 0;
// const interval = setInterval(() => {
//     if (counter < 10) {
//         counter++;
//         console.log(counter); { }
//     } else {
//         console.log("Not yet ...");
//         clearInterval(interval);
//     }

// }, 1000); //1000=1 sec

// // setTimeout
// setTimeout(() => {
//     console.log("Helo there!");

// }, 2000);

// // esercizio_03_01
// const first_number = document.querySelector("#first_number");
// const second_number = document.querySelector("#second_number");
// const start_increment_btn = document.querySelector("#start_increment_btn");
// let check = true;

// const new_interval = (n, element) => {
//     let counter = 0;
//     let interval = setInterval(() => {
//         if (counter < n) {
//             counter++;
//             element.innerText = counter;
//         } else {
//             clearInterval(interval);
//         }
//     }, 10);

//     setTimeout(() => {
//         check = true;
//     }, 3000);
// }
// start_increment_btn.addEventListener('click', () => {
//     if (check) {
//         check = false;
//         new_interval(100, first_number);
//         new_interval(150, second_number);
//     }
// });

// // fetch

// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(promise);

// // promise

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log(data));


// // esercizio_03_02
// const wrapper = document.querySelector("#wrapper");

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);

//         data.forEach((user) => {
//             const div = document.createElement("div");

//             div.innerHTML = `
//                 <p>Name: ${user.name}</p>
//                 <p>Username: ${user.username}</p>
//                 <p>Email: ${user.email}</p>
//                 <hr>
//             `;

//             wrapper.appendChild(div);
//         });
//     });


// Async Functions 

// async function get_data(){
// ...
// }
// // or with arrow function
const get_data = async () => {
    // await 
    const promise = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await promise.json();
    return json;
}

const create_users = async () => {
    const data = await get_data();
    data.forEach((user) => {
        const div = document.createElement("div");

        div.innerHTML = `
                        <p>Name: ${user.name}</p>
                        <p>Username: ${user.username}</p>
                        <p>Email: ${user.email}</p>
                        <hr>
                    `;

        wrapper.appendChild(div);
    })
}
create_users();