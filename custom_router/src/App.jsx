import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css';
import { ContextProvider } from './context/Context';
import { UserContextProvider } from './context/UseContext';

// Custom Hooks
import useFetch from './hooks/useFetch';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState();
  const data = useFetch(url, url);


  return (
    <>
      {/* Custom Hooks */}
      {/* <h1 text-red-500>Titles (Custom Hooks)</h1>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}>Posts</button>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>
      <ul>
        {data && data.map((post) => <li key={post.id}>{post.title || post.name}</li>)}
      </ul> */}
      {/* Custom Hooks */}


      <ContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ContextProvider>
    </>
  )
}

export default App
