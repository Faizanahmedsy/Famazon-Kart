import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductItem from './components/ProductItem';
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
    <ProductItem />
    <Routes>
        <Route path="/product/:index" element={<ProductDetails />} />
    </Routes>
    </>
  );
}

export default App;
