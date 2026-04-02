function Lista({ children }) {
    return (
        <ul>{children}</ul>
    )
}

function Item({ children }) {
    return (
        <li>{children}</li>
    )
}

Lista.Item = Item;

export default Lista;