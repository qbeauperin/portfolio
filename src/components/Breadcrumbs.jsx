import React from 'react';
import { Link, Route } from 'react-router-dom';
import Projects from '../pages/Projects';

const Breadcrumbs = (project) => (
    <div className="breadcrumbs">
        <Link to="/projects">projects</Link>
        <div className="separator">></div>
        <Route path="/projects" children={props => (
            <Projects {...props}/>
        )}/>
    </div>
);

export default Breadcrumbs;
