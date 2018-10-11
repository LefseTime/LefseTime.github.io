import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (

  <div id="nav">
    <header>
      <a href="#main-menu"
        class="menu-toggle"
        role="button"
        id="main-menu-toggle"
        aria-expanded="false"
        aria-controls="main-menu"
        aria-label="Open main menu">
        <span class="sr-only">Open main menu</span>
        <span class="fa fa-bars" aria-hidden="true"></span>
      </a>

      <div className="head" id="pleasework">
        <h1 className="nav sonia"><Link to="/" title="home" className="blacklink">S.C. Funkenbusch</Link></h1>
        <h3 className="nav sonia">Full-Stack Developer</h3>
      </div>

      <nav id="main-menu"
        class="main-menu"
        aria-expanded="false"
        aria-label="Main menu">
        <a href="#main-menu-toggle"
          class="menu-close"
          role="button"
          id="main-menu-close"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Close main menu">
          <span class="sr-only">Close main menu</span>
          <span class="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <a href="#main-menu-toggle"
        class="backdrop"
        tabindex="-1"
        aria-hidden="true"
        hidden>Drop-down</a>
    </header>
  </div>
);

export default Nav;
