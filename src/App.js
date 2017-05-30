import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Header from './components/Header';
import Project from './components/Project';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
    componentWillMount() {
        this.projects = [
            {
                key: 1,
                name: 'Leon and Harper',
                uri: 'leon-and-harper',
                techs: ['magento', 'sass', 'grunt', 'bootstrap'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/660/?random', 'https://unsplash.it/1000/665/?random']
            },
            {
                key: 2,
                name: 'Travel journal',
                uri: 'travel-journal',
                techs: ['react', 'html5', 'sass'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/661/?random', 'https://unsplash.it/1000/664/?random']
            },
            {
                key: 3,
                name: 'Natalys',
                uri: 'natalys',
                techs: ['react', 'html5', 'sass'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/662/?random', 'https://unsplash.it/1000/663/?random']
            },
            {
                key: 4,
                name: 'Maille Leo',
                uri: 'maille-leo',
                techs: ['react', 'html5', 'sass'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/663/?random', 'https://unsplash.it/1000/662/?random']
            },
            {
                key: 5,
                name: 'Nisop',
                uri: 'nisop',
                techs: ['react', 'html5', 'sass'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/664/?random', 'https://unsplash.it/1000/661/?random']
            },
            {
                key: 6,
                name: 'Oxbow SUP',
                uri: 'oxbow-sup',
                techs: ['react', 'html5', 'sass'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/662/?random', 'https://unsplash.it/1000/663/?random']
            },
            {
                key: 7,
                name: 'Le Ptio',
                uri: 'le-ptio',
                techs: ['react', 'html5', 'sass'],
                features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer'],
                comments: ['some of the functionnalities have been abandoned during the development process for budget reasons'],
                imgs: ['https://unsplash.it/1000/660/?random', 'https://unsplash.it/1000/665/?random']
            }
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
                </div>
            </Router>
        );
    }
}

export default App;
