import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div>
        {/* Se muestra en todas las paginas */}
        <Navbar />
        {/* Adentro del switch cada route es la pagina que se va a renderizar */}
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Login} exact path="/login" />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
