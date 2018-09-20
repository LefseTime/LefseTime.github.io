import React from "react";

const Button = props => (
    // <span className="button">
    <div>
      <a className="button" href={props.link} title={props.title}>{props.text}</a>
    {/* // </span> */}
    </div>
  );
  
  export default Button;