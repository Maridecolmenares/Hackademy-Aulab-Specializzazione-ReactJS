import { get_products } from "./api.js";

const wrapper = document.querySelector("#wrapper");
const btn = document.querySelector("#load_btn");
const loader = document.querySelector("#loader");

loader.style.display = "none";

const create_products = async () => {
    loader.style.display = "block";

    const data = await get_products();

    setTimeout(() => {
        loader.style.display = "none";

        wrapper.innerHTML = "";

        data.forEach((product) => {
            const div = document.createElement("div");

            div.innerHTML = `
                <p>Name: ${product.name}</p>
                <p>Category: ${product.category}</p>
                <p>Price: ${product.price}</p>
                <hr>
            `;

            wrapper.appendChild(div);
        });
    }, 2000);
}
btn.addEventListener("click", () => {
    create_products();
});