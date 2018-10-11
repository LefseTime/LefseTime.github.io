import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="body">
          <Nav />
          
            <Route exact path={`/about`} component={About} />
            <Route exact path={`/portfolio`} component={Portfolio} />
            <Route exact path={`/resume`} component={Resume} />
            <Route exact path={`/`} component={Home} />
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
