import React, { Component, useEffect } from 'react';
import {Helmet} from "react-helmet";
import Header from './components/Header';
import Project from './components/Project';
import ConsoleContact from './components/ConsoleContact';
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useMatch } from 'react-router-dom';
import data from './data.js';

function App () {
    let projects = data.projects;
    
    useEffect(() => {
        ReactGA.initialize("G-V3786M6321");
    }, [])

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
                <Routes>
                    <Route path="*" element={<Header projects={projects}/> } />
                </Routes>
                <main>
                    <Routes>
                        <Route path="/" element={<Helmet title="Quentin Beauperin | Front-end developer" />} />
                        <Route path="/projects" element={<Helmet title="Projects | Quentin Beauperin" />} />
                        <Route path="/projects/:project" element={<ContentWrapper projects={projects} />} />
                    </Routes>
                </main>
                <ConsoleContact/>
            </div>
        </Router>
    );
}

function ContentWrapper(props){
    let project = null;
    let match = useMatch({
        path: '/projects/:project'
    });
    let location = useLocation();
    if(location.pathname.indexOf('/projects/') !== -1 && !match) {
        return <Navigate to="/projects"/>
    }
    const matchingProjects = props.projects.filter((project) => {
        return match && project.uri.indexOf(match.params.project) !== -1;
    });
    project = matchingProjects[0];
    if (match && !project) {
        return <Navigate to="/projects"/>
    }
    return <Project {...project}/>
}

export default App;
