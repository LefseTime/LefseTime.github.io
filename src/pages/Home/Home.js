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
        <h1 className="main">Sonia Funkenbusch Home</h1>
      );
    }
  }
  
  export default Home;
  