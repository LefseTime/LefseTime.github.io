import React, { Component } from "react";

class Contact extends Component {
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
      <div className="main" id="home">
        <h1>Sonia Funkenbusch Contact</h1>
      </div>
    );
  }
}

export default Contact;