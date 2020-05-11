import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Persistent/Navbar";
import Footer from "./components/Persistent/Footer"
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import CA from "./pages/CA/CA"
import Dashboard from "./pages/Dashboard/Dashboard" 
import FindFriend from "./pages/FindFriends/FindFriend"
import AddGame from './pages/AddGame/AddGame';

function App() {
  return (
    <Router>
      <div>
      <NavBar/>
    <Switch>
      <Route exact path={["/", "/landing"]}>
        <Home/>
      </Route>
      <Route exact path={["/about"]}>
      <AboutMe/>
        </Route>
        <Route exact path={["/createAccount"]}>
        <CA/>
        </Route>
        <Route exact path={["/dashboard"]}>
        <Dashboard/>
        </Route>
        <Route exact path={["/findfriends"]}>
        <FindFriend/>
        </Route>
        <Route>
          <AddGame/>
        </Route>
      </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
