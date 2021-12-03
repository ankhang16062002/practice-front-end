import './App.scss'
import 'swiper/swiper.min.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <Footer />
      <Menu />
      <Cursor />
    </div>
  );
}

export default App;
