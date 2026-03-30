function App() {
  const name = "Maryna";


  return (
    <>
      <h1 className="title">Hello world!</h1>
      <h2>Hola {name}</h2>
      {/* or name ? name : "default" */}
      {/* or 2+2 */}
      <img className="test" src="https://picsum.photos/200" />
      <label htmlFor="input_test" className="label">Test</label>
      <input type="text" id="input_test" className="input" />
    </>
  )
}

export default App

// JSX
// Return obligatorio
// div soup
// React Fragment <>...</>
// Tutti tag devono essere chiusi
// class & for - reservati a JS -> className & htmlFor
