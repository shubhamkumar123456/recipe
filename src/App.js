
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DisplayRecipe from './pages/DisplayRecipe';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/recipe' element={ <DisplayRecipe/>}/>
        <Route path='/wishlist' element={ <WishlistPage/>}/>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
