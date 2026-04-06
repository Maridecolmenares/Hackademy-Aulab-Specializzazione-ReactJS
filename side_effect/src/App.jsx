import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // useEffect
  const [posts, setPosts] = useState();
  const [trigger, setTrigger] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await promise.json();
    setPosts(json);
    console.log(json);

  }

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        getData();
        setIsLoading(false);
      }, 2000);
    }

  }, [trigger]);

  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
      setTrigger(false);
      setPosts(null);
    } else {
      setIsVisible(true);
      setTrigger(true);
      setIsLoading(true);
    }
  }

  return (
    <>
      <h1>Async React Lesson</h1>
      <button onClick={handleClick}>Click here!</button>
      {isLoading && <p>Loading data...</p>}
      <ul>
        {isVisible && posts && posts.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
