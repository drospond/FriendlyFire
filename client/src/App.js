import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Persistent/Navbar";
import Footer from "./components/Persistent/Footer"
import Home from "./pages/Home/Home"


function App() {
  return (
    <Router>
      <div>
      <NavBar/>
    <Switch>
      <Home exact path={["/", "/landing"]}/>
      </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
