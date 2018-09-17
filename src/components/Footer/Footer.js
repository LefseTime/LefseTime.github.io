import React, { Component } from "react";


class Footer extends Component {
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
      <div className="footer" id="footer">
        <a href="https://github.com/LefseTime" target="_blank" rel="noopener noreferrer" id="github" className="blacklink"><i className="fab fa-github fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/scfunkenbusch/" target="_blank" rel="noopener noreferrer" id="linkedin" className="blacklink"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="mailto:scfunkenbusch@gmail.com" id="email" className="blacklink"><i className="fas fa-envelope fa-2x"></i></a>
      </div>
    );
  }
}

export default Footer;
