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
                    <Helmet title="Quentin Beauperin | Front-end developer">
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                        <link rel="manifest" href="/manifest.json"/>
                        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222"/>
                        <meta name="theme-color" content="#ffffff"/>
                    </Helmet>
                    <Route path="/" children={({ location }) => (
                        <Header location={location} projects={this.projects}/>
                    )}/>
                    <main>
                        <Route path="/" render={() => <Helmet title="Quentin Beauperin"/> }/>
                        <Route path="/projects" render={() => <Helmet title="Projects | Quentin Beauperin"/> }/>
                        <Route path="/projects/:project" children={(router) => {
                            let project = null;
                            if(router.location.pathname.indexOf('/projects/') !== -1 && !router.match) {
                                return <Redirect to="/projects"/>
                            }
                            const matchingProjects = this.projects.filter((project) => {
                                return router.match && project.uri.indexOf(router.match.params.project) !== -1;
                            });
                            project = matchingProjects[0];
                            if (router.match && !project) {
                                return <Redirect to="/projects"/>
                            }
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
