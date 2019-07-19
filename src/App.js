import React from "react";
import Home from "./containers/Home";
import User from "./containers/User";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header
        routes={[
          { path: "/home", name: "Home" },
          { path: "/user", name: "User" }
        ]}
      />
      <div id="App">
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}

export default App;
