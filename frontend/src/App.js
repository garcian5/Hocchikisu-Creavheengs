// react stuff
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components
import Footer from './components/presentational/Footer';
import NavBar from './components/presentational/NavBar';
import About from './components/presentational/About';
import Home from './components/presentational/Home';

import PlasticArt from './components/presentational/artcategory/PlasticArt';
import LiteraryArt from './components/presentational/artcategory/LiteraryArt';
import VisualArt from './components/presentational/artcategory/VisualArt';
import OtherArt from './components/presentational/artcategory/OtherArt';

import CreateAccount from './components/presentational/user/CreateAccount';
import Login from './components/presentational/user/Login';


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />

                    <Route path="/literary-art" component={LiteraryArt} />
                    <Route path="/visual-art" component={VisualArt} />
                    <Route path="/plastic-art" component={PlasticArt} />
                    <Route path="/other-art" component={OtherArt} />

                    <Route path="/create-account" component={CreateAccount} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}

export default App;
