import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button id="increment" onClick={increment}>+</button>
            <button id="decrement" onClick={decrement}>-</button>
        </div>
    )
}