import React, { Component } from "react";
import pdf from '../../pdf/resume.pdf';

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
          <a href={pdf} download="FunkenbuschResume" className="whitelink" id="resumeDL">Download Resume</a>
          <img src="https://i.imgur.com/ngogRVn.jpg" title="Resume Page 1" className="resume" id="resume1" />
          <img src="https://i.imgur.com/J3uv4UF.jpg" title="Resume Page 2" className="resume" id="resume2" />
          <a href={pdf} download="FunkenbuschResume" className="whitelink" id="resumeDL">Download Resume</a>
        </div>
      </div>

    );
  }
}

export default Resume;