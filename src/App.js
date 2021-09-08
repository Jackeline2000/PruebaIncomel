import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { LoginPage } from './containers/LoginPage/login';
import { UsuariosPage } from './containers/UsuariosPage/usuarios';
import { EmpleadoPage } from './containers/EmpleadosPage/empleado';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={LoginPage} />
                  <Route exact path="/login" component={LoginPage}/>
                  <Route exact path="/usuarios" component={UsuariosPage}/>
                  <Route exact path="/empleados" component={EmpleadoPage}/>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
