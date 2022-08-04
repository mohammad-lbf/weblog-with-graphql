import React from 'react';
import './App.css'
import Articles from './component/Articles';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
const App = () => {
  return (
    <div>
      <Header />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;