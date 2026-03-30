import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import List from './components/List';

function App() {

  const nomi = ["Mari", "Lisi", "Irvin"];

  return (
    <>
      <Navbar />
      <Header title="The new title" />
      {/* <Header title="Title 2" />
      <Header title="Title 3" /> */}
      <List nomi={nomi} />
    </>
  )
}

export default App
