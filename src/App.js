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
          
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />
            <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
