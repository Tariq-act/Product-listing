import { Routes, Route } from 'react-router-dom';

import './App.css';

import ProductHome from './pages/product-home/product-home.page';
import Checkout from './pages/checkout/checkout.page';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/'>
          <Route index='/product-list' element={<ProductHome />} />
        </Route>

        <Route path='/check-out' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
