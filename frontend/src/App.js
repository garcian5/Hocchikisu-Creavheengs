// react stuff
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import Footer from './components/presentational/Footer';
import NavBar from './components/presentational/NavBar';
import Home from './components/presentational/Home';


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}

export default App;
