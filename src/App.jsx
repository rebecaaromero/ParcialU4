
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {Menu} from './components/Menu';
import {Footer} from './components/Footer';
import MenuMovil from './components/MenuMovil/MenuMovil';
import Header from './components/Header/header'
import Inicio from './components/Inicio/inicio'
import Galeria from './components/Galeria/galeria'
import Formulario from './components/Formulario/formulario'


import Home from './pages/Home/home';
import Acerca from './pages/Acerca/acerca'
import Contacto from './pages/Contacto/contacto'
import Error from './pages/Error'
import './sass/App.scss';


export default function App() {
  return (
    <Router>
    <Menu /> <MenuMovil/>
    <Switch> 
      <Route path="/" exact > <Home/> <Header />  <Inicio/>  </Route> 
      <Route path="/acerca" exact > <Acerca/> <Galeria /> </Route> 
      <Route path="/contacto" exact > <Contacto/> <Formulario /> </Route>
      <Route component={Error} /> 
    </Switch> 
    <Footer />
    </Router>
  );
}

