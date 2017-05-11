import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const projects = [1,2,3,4,5,6,7].map((number) =>
            <div className="project" key={number}>
                <div className="wrap">
                    {number}
                </div>
            </div>
        );

        return (
            <div className="projects">
                {projects}
            </div>
        );
    }
}

export default Projects;
