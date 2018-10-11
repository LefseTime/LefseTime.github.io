import React from "react";
import { Link } from "react-router-dom";

const Button = props => (
    // <span className="button">
    <div>
      {/* <a className="button" href={props.link} title={props.title}>{props.text}</a> */}
      <Link to={props.link} title={props.title} className="button">{props.text}</Link>
    {/* // </span> */}
    </div>
  );
  
  export default Button;