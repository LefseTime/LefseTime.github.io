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
        <h1 className="nav sonia"><a href="/">Sonia Funkenbusch</a></h1>
        <h3 className="nav sonia">Full-Stack Developer</h3>
      </div>
    );
  }
}

export default Nav;
