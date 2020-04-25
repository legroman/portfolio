import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <div className="body-app">
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    );
}

export default App;
