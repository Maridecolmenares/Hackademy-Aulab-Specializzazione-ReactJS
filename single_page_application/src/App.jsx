import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './views/Homepage';
import Info from './views/Info';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import DetailView from './views/DetailView';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="info" element={<Info />} />
            <Route path="info/:id" element={<DetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
