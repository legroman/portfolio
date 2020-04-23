import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/main";

function App() {
    return (
        <React.Fragment className="body-app">
            <Header/>
            <Main/>
        </React.Fragment>
    );
}

export default App;
