import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import CreateProduct from './pages/CreateProduct';


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
