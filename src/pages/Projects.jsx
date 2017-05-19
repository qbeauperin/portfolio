import React, { Component } from 'react';
// import Grid from '../components/Grid';
import Swiper from 'react-id-swiper';
import '../styles/swiper.css';
import ProjectThumb from '../components/ProjectThumb';

class Projects extends Component {
    render() {
        const projectsData = [
            {key: 1, name: 'Leon and Harper', 'uri': 'leon-and-harper', techs: 'magento, sass, grunt, bootstrap', 'img': 'https://unsplash.it/301/300/?random'},
            {key: 2, name: 'Travel journal', 'uri': 'travel-journal', techs: 'react, html5, sass', 'img': 'https://unsplash.it/302/300/?random'},
            {key: 3, name: 'Natalys', 'uri': 'natalys', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/301/?random'},
            {key: 4, name: 'Maille Leo', 'uri': 'maille-leo', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/302/?random'},
            {key: 5, name: 'Nisop', 'uri': 'nisop', techs: 'react, html5, sass', 'img': 'https://unsplash.it/301/301/?random'},
            {key: 6, name: 'Oxbow SUP', 'uri': 'oxbow-sup', techs: 'react, html5, sass', 'img': 'https://unsplash.it/302/302/?random'},
            {key: 7, name: 'Le Ptio', 'uri': 'le-ptio', techs: 'react, html5, sass', 'img': 'https://unsplash.it/301/302/?random'}
        ];
        const projects = projectsData.map((project) => (
            <ProjectThumb {...project}/>
        ));
        const swiper = {
            slidesPerView: 'auto',
            centeredSlides: true
        }
        return (
            <div className="projects">
                <Swiper {...swiper}>
                    {projects}
                </Swiper>
            </div>
        );
    }
}

export default Projects;
