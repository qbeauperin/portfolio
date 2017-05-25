import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    componentWillMount() {
        this.projects = [
            {key: 1, name: 'Leon and Harper', 'uri': 'leon-and-harper', techs: 'magento, sass, grunt, bootstrap', 'img': 'https://unsplash.it/301/300/?random'},
            {key: 2, name: 'Travel journal', 'uri': 'travel-journal', techs: 'react, html5, sass', 'img': 'https://unsplash.it/302/300/?random'},
            {key: 3, name: 'Natalys', 'uri': 'natalys', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/301/?random'},
            {key: 4, name: 'Maille Leo', 'uri': 'maille-leo', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/302/?random'},
            {key: 5, name: 'Nisop', 'uri': 'nisop', techs: 'react, html5, sass', 'img': 'https://unsplash.it/301/301/?random'},
            {key: 6, name: 'Oxbow SUP', 'uri': 'oxbow-sup', techs: 'react, html5, sass', 'img': 'https://unsplash.it/302/302/?random'},
            {key: 7, name: 'Le Ptio', 'uri': 'le-ptio', techs: 'react, html5, sass', 'img': 'https://unsplash.it/301/302/?random'}
        ];
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
                        <Route path="/projects/:project" children={({ match }) => {
                            let project = null;
                            if(match){
                                const matchingProjects = this.projects.filter((project) => {
                                    return project.uri.indexOf(match.params.project) !== -1;
                                });
                                project = matchingProjects[0];
                            }
                            return (
                                <Project {...project}/>
                            )
                        }}/>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
