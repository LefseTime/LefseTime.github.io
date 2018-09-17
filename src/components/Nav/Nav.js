import React, { Component } from "react";

class Nav extends Component {
  state = {

  };

  componentDidMount() {

  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
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

          <h1 className="nav sonia"><a className="blacklink" href="/">S.C. Funkenbusch</a></h1>
          <h3 className="nav sonia">Full-Stack Developer</h3>

          <nav id="main-menu"
            class="main-menu"
            role="navigation"
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
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/">Resume</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
          <a href="#main-menu-toggle"
            class="backdrop"
            tabindex="-1"
            aria-hidden="true"
            hidden></a>
        </header>
      </div>
    );
  }
}

export default Nav;
