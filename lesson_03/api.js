export const get_products = async () => {
    const promise = await fetch("./products.json");
    const data = await promise.json();
    return data;
}