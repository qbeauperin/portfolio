import React, { Component } from 'react';
import Grid from '../components/Grid';

class Projects extends Component {
    render() {
        const projects = ['Leon and Harper', 'Travel journal', 'Leon and Harper', 'Natalys', 'MailleLeo', 'Nisop', 'Oxbow SUP', 'Le Ptio'];
        return (
            <div className="projects">
                <Grid elements={projects}/>
            </div>
        );
    }
}

export default Projects;
