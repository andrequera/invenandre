import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Jumbo />
    <Card />
    <Footer />
    </>
  );
}

export default App;
