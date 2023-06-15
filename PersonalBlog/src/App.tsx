
import './App.css'
import { Grid } from '@material-ui/core'
import Home from './pages/home'
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
       <Home />
      <Footer />
    </>
  );
}

export default App;