import { useState } from "react"
import './App.css'
import Counter from "./components/Counter"
import Form from "./components/Form"

function App() {
  // State
  // Virtual DOM

  // Hooks - lifecycle
  // - useState()

  // const [counter, setCounter] = useState(0);
  // const [value, setValue] = useState(0);

  // const incrementByOne = () => {
  //   setCounter((prev) => prev + 1);
  // }

  // const decrementByOne = () => {
  //   setCounter((prev) => prev - 1);
  // }

  // const handleValue = (e) => {
  //   setValue(+e.target.value);

  // }

  // const incrementByValue = () => {
  //   setCounter((prev) => prev + value);
  // }

  return (
    <>
      <h1>React State Management</h1>
      <Counter />
      <Form />



      {/* //     <h1>This is the State Lesson.</h1>
  //     <p>Counter values: {counter}</p>
  //     <button id="increment" onClick={incrementByOne}>+</button>
  //     <button id="decrement" onClick={decrementByOne}>-</button>
  //     <div>
  //       <input type="number" onChange={handleValue} />
  //       <button id="increment_by_value" onClick={incrementByValue}>+</button>
  //     </div> */}
    </>
  )
}

export default App
