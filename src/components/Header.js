import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <div id="header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
