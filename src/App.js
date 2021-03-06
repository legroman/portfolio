import React from 'react';
import {Switch, Route} from "react-router-dom";
import './scss/App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="body-app">
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/work" component={Work}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    );
}

export default App;
