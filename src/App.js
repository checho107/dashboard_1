import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Cerrar from './pages/cerrarSesion';
import Grupos from './pages/grupos';
import Mensajes from './pages/mensajes';
import Soporte from './pages/soporte';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Switch>
        {/* Ruta para el login */}
        <Route path='/login'>
          <Login onLogin={handleLogin} />
        </Route>
        {/* Otras rutas protegidas */}
        <Route path='/'>
          {/* Redireccionar a la página de inicio si no está autenticado */}
          {isLoggedIn ? (
            <div>
              <Navbar />
              <Switch>
                <Route path='/reports' component={Reports} />
                <Route path='/products' component={Products} />
                <Route path='/cerrar' component={Cerrar} />
                <Route path='/grupos' component={Grupos} />
                <Route path='/mensajes' component={Mensajes} />
                <Route path='/soporte' component={Soporte} />
                <Route path='/' exact component={Home} />
              
              </Switch>
            </div>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
