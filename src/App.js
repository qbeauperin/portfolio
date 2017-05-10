import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Index from './pages/Index';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet title="Quentin Beauperin" meta={[
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    ]} />
                    <Link to="/" className="header">quentin beauperin</Link>
                    <main>
                        <Route exact path="/" component={Index}/>
                        <Route path="/projects" component={Projects}/>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
