import './App.css';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products';
import Review from './components/Review/Review';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
