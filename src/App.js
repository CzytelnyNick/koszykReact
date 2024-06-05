import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { useState } from 'react';


import { Link, Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './sites/ShoppingCart';
import Root from './sites/Root';
import Home, { NewTab} from './sites/Home';

function App() {
  const [tab, setTab] = useState([]);
  return (
    
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/carteczka' element={<ShoppingCart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
