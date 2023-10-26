import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Header from './components/header';
import Description from './components/description';
import ExerciseGenerator from './components/exercisegenerator';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar />
                <Header />
                <Description />
                <ExerciseGenerator/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default App;
