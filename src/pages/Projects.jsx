import React, { Component } from 'react';
import Grid from '../components/Grid';
import ProjectThumb from '../components/ProjectThumb';

class Projects extends Component {
    render() {
        const projectsData = [
            {key: 1, name: 'Leon and Harper', techs: 'magento, sass, grunt, bootstrap', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 2, name: 'Travel journal', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 3, name: 'Leon and Harper', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 4, name: 'Natalys', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 5, name: 'Maille Leo', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 6, name: 'Nisop', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 7, name: 'Oxbow SUP', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'},
            {key: 8, name: 'Le Ptio', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/300/?random'}
        ];
        const projects = projectsData.map((project) => (
            <ProjectThumb {...project}/>
        ));
        return (
            <div className="projects">
                <Grid elements={projects}/>
            </div>
        );
    }
}

export default Projects;
