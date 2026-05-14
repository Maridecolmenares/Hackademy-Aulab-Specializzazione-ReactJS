import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import UserContextProvider from "./context/UserContext";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  )
}

export default App
