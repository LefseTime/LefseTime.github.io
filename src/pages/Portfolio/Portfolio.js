import React, { Component } from "react";

class Portfolio extends Component {
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
        <h1>Sonia Funkenbusch Portfolio</h1>
      );
    }
  }
  
  export default Portfolio;