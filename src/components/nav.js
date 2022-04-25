import React from "react";
import {Link,BrowserRouter as Router} from "react-router-dom";

const nav = () => {
  return (
    <Router>

      <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
    </Router>
    
  );
};

export default nav;