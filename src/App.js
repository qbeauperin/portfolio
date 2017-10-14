import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Header from './components/Header';
import Project from './components/Project';
import ConsoleContact from './components/ConsoleContact';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import data from './data.js';

class App extends Component {
    componentWillMount() {
        this.projects = data.projects;
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet title="Quentin Beauperin" meta={[
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    ]} />
                    <Route path="/" children={({ location }) => (
                        <Header location={location} projects={this.projects}/>
                    )}/>
                    <main>
                        <Route path="/projects/:project" children={(router) => {
                            let project = null;
                            if(router.location.pathname.indexOf('/projects') !== -1 && !router.match) {
                                return <Redirect to="/projects"/>
                            }
                            const matchingProjects = this.projects.filter((project) => {
                                return router.match && project.uri.indexOf(router.match.params.project) !== -1;
                            });
                            project = matchingProjects[0];
                            return (
                                <Project {...project}/>
                            )
                        }}/>
                    </main>
                    <ConsoleContact/>
                </div>
            </Router>
        );
    }
}

export default App;
