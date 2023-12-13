import React, { useRef } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import ProjectThumb from './ProjectThumb';
import './Projects.css';
import '../styles/swiper.css';

function Projects (props) {
    const location = useLocation();
    const currentProjectName = location.pathname.replace('/projects/', '');
    const matchingProjects = props.projectsData.filter((project) => {
        return project.uri.indexOf(currentProjectName) !== -1;
    });
    const projectIndex = props.projectsData.indexOf(matchingProjects[0]);
    const swiperParams = {
        slidesPerView: 'auto',
        centeredSlides: true,
        direction: 'vertical',
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        mousewheelControl: projectIndex < 0,
        keyboardControl: projectIndex < 0,
        initialSlide: (projectIndex >= 0) ? projectIndex : 0,
    }
    const ref = useRef(null);
    if(projectIndex >= 0 && ref.current && ref.current.swiper){
        ref.current.swiper.slideTo(projectIndex)
    }
    return (
        <div className="projects">
            <Swiper {...swiperParams} ref={ref}>
                {props.projectsData.map((project, index) => (
                    <ProjectThumb key={index} {...project}/>
                ))}
            </Swiper>
        </div>
    );
}

export default Projects;
