import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Images from './components/Images';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/frontpage' element={<Frontpage />} />
          <Route exact path='/images' element={<Images />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
