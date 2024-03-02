import logo from './logo.png'
import './App.css';
import Menu from './componentes/Menu';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Incio from './componentes/Inicio';
import About from './componentes/About';
import Contact from './componentes/Contact';
import styles from './styles.css'


function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Menu/>  
        <Routes>
          <Route path='/' element={<Incio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

