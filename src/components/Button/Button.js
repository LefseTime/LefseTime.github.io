import React from "react";
import { Link } from "react-router-dom";

const Button = props => (
    <div>
      <Link to={props.link} title={props.title} className="button">{props.text}</Link>
    </div>
  );
  
  export default Button;