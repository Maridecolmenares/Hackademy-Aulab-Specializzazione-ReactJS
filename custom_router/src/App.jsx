import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css';
import { ContextProvider } from './context/Context';
import { UserContextProvider } from './context/UseContext';

function App() {

  return (
    <>
      <ContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ContextProvider>
    </>
  )
}

export default App
