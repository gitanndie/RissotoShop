import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Shop/Navbar'
import Banner from './Components/Shop/Banner'
import Card from './Components/Shop/Card'
import Modals from './Components/Shop/Modals'
import Footer from './Components/Shop/Footer';
import Calculo from './Components/Shop/Calculo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card/>
      <Calculo/>
      <Modals/>
      <Footer/>
    </div>
  );
}

export default App;
