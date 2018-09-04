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
        <h1 className="footer">Footer</h1>
      );
    }
  }
  
  export default Footer;
  