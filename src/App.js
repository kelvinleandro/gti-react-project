import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
