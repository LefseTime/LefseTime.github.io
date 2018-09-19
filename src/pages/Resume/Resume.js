import React, { Component } from "react";

class Resume extends Component {
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
      <div className="main" id="resume">
        <div className="scroll">
          <h1 className="title">Resume</h1>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Resume;