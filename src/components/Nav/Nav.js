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
        <h1 className="nav">Nav</h1>
      );
    }
  }
  
  export default Nav;
  