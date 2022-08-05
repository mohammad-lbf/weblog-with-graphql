import React from 'react';
import './App.css'
import Articles from './component/Articles';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import { Routes , Route } from 'react-router-dom';
import Categories from './component/Categories';
import AboutUs from './component/AboutUs';
import Authors from './component/blog/Authors';
import AboutProject from './component/AboutProject';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route 
            path="/"
            element={<Articles />} />
        <Route 
            path="/categories"
            element={<Categories />} />
        <Route 
            path="/aboutus"
            element={<AboutUs />} />
        <Route 
            path="/authors"
            element={<Authors />} />    
        <Route 
            path="/aboutproject"
            element={<AboutProject />} />    
      </Routes>

      <Footer />
    </div>
  );
};

export default App;