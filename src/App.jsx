import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Config from './pages/Configuration';
import Media from './pages/Media';
import Charts from './pages/Charts';
import Users from './pages/Users';
import Account from './pages/Account';
import TokenService from './services/core/TokenService';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <Router>
      <div>
        {/* Se muestra en todas las paginas */}
        {
          (TokenService.getToken() || user?.id)
          && <Navbar />
        }
        {/* Adentro del switch cada route es la pagina que se va a renderizar */}
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Login} exact path="/login" />
          <PrivateRoute component={Config} exact path="/configuration" />
          <PrivateRoute component={Media} exact path="/media" />
          <PrivateRoute component={Charts} exact path="/charts" />
          <PrivateRoute component={Users} exact path="/users" />
          <PrivateRoute component={Account} exact path="/account" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
