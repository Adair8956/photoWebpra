import React from "react"
import Nav from "./components/nav";
import Footer from "./components/footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import {Switch, Route} from "react-router-dom";
import "./styles/styles.css";

//--V6版本react-router-dom不支援Switch

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    
      <Footer />
      
    </div>
  );
}

export default App;
