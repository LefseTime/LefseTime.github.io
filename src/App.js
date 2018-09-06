import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            <Route path='/*' component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
