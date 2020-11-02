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
import Test from './components/presentational/Test';
import Story from './components/presentational/artcategory/Story';
import Comics from './components/presentational/artcategory/Comics';
import Art from './components/presentational/artcategory/Art';
import Poem from './components/presentational/artcategory/Poem';


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                    <Route path="/story" component={Story} />
                    <Route path="/comics" component={Comics} />
                    <Route path="/art" component={Art} />
                    <Route path="/poem" component={Poem} />
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}

export default App;
