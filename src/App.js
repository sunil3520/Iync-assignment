import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Details from './components/Details';
import ProductSuite from './components/ProductSuite';
import Slider from './components/Slider';
import Slider2 from './components/Slider2';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#1e1e1e] h-full'>
     <Navbar/>
     <Heading/>
     <Details/>
     <ProductSuite/>
     <Slider/>
     <Slider2/>
     <Community/>
     <Footer/>
    </div>
  );
}

export default App;