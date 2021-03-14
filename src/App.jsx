import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Config from './pages/Configuration'
import Media from './pages/Media'
import Charts from './pages/Charts'
import AddChart from './pages/AddChart'
import Users from './pages/Users'

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
          <Route component={Config} exact path="/configuration" />
          <Route component={Media} exact path="/media" />
          <Route component={Charts} exact path="/charts" />
          <Route component={AddChart} exact path="/addChart" />
          <Route component={Users} exact path="/users" />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
