import React, { Component } from "react";

class Home extends Component {
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
        <h1>Sonia Funkenbusch Home</h1>
      </div>
    );
  }
}

export default Home;
