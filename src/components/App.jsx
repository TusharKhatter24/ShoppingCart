import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function App() {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products.map(product => ({...product,count: 0}))));
  }, []);

  function handleClick() {
    setToggle(prev => !prev);
  };

  function add(product) {
    setTotalItems(prev => prev + 1);
    const updatedItems = products.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          count: item.count + 1
        };
      } else return item;
    });
    setProducts(updatedItems);
  };

  function subtract(product) {
    setTotalItems(prev => prev - 1);
    const updatedItems = products.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          count: item.count - 1
        };
      } else return item;
    });
    setProducts(updatedItems);
  };

  function removeFromCart(product) {
    setTotalItems(prev => prev - product.count);
    const updatedItems = products.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          count: 0
        };
      } else return item;
    });
    setProducts(updatedItems);
  };
  return (
    <Router>
      <div>
      <Link to="/"><AiFillHome className='home' /></Link>
      <ShoppingCart totalItems={totalItems} toggle={toggle} handleClick={handleClick} cartItems={products} add={add} subtract={subtract} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={
              <div>
                <ProductList products={products} add={add} subtract={subtract} />
              </div>
          }/>
          <Route path="/product/:id" element={<ProductDetails products={products} add={add} subtract={subtract} />} />
        </Routes>
      </div>
    </Router>
    );
};
