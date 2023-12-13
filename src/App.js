import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import Header from './components/Header';
import Project from './components/Project';
import ProjectNav from './components/ProjectNav.jsx';
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
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
                    <meta name="theme-color" content="#ffffff"/>
                    <meta name="description" content="Front-end developer, open to Vancouver-based or remote work oportunities." />
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
    const { projects } = props;
    const match = useMatch({
        path: '/projects/:project'
    });
    const location = useLocation();
    if(location.pathname.indexOf('/projects/') !== -1 && !match) {
        return <Navigate to="/projects"/>
    }
    const matchingProjects = projects.filter((project) => {
        return match && project.uri.indexOf(match.params.project) !== -1;
    });
    const project = matchingProjects?.length ? matchingProjects[0] : null;
    const matchingProjectIndex = projects.indexOf(project);
    const previousProject = projects[matchingProjectIndex - 1 ];
    const nextProject = projects[matchingProjectIndex + 1];
    if (match && !project) {
        return <Navigate to="/projects"/>
    }
    return (
        <>
            <Project {...project}/>
            <ProjectNav previous={previousProject} next={nextProject}/>
        </>
    )
}

export default App;
