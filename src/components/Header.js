import React from "react";
import { useState } from "react";

const Header = (props) => {
  return (
    <div id="header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
