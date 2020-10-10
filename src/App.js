import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Shop/Navbar'
import Banner from './Components/Shop/Banner'
import Card from './Components/Shop/Card'
import Footer from './Components/Shop/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
