import React from 'react';
import './App.css'
import Articles from './component/Articles';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import { Routes , Route } from 'react-router-dom';
import AboutUs from './component/AboutUs';
import Authors from './component/blog/Author';
import AboutProject from './component/AboutProject';
import Blog from './component/blog/Blog';
import Author from './component/blog/Author';

// All Rights are reserved for Mohammad Labbafi
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route 
            path="/"
            element={<Articles />} />
        <Route 
            path="/aboutus"
            element={<AboutUs />} />
         <Route 
            path="/blogs/:slug"
            element={<Blog />} />   
        <Route 
            path="/authors"
            element={<Authors />} />  
        <Route 
        path="/authors/:slug"
        element={<Author />} />   
        <Route 
            path="/aboutproject"
            element={<AboutProject />} />    
      </Routes>

      <Footer />
    </div>
  );
};

export default App;