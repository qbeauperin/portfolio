import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Header from './components/Header';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet title="Quentin Beauperin" meta={[
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    ]} />
                    <Route path="/" children={({ match }) => (
                        <Header home={match}/>
                    )}/>
                    <main>
                        <Route path="/projects" component={Projects}/>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
