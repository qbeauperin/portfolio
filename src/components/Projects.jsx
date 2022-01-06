import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import ProjectThumb from './ProjectThumb';
import './Projects.css';
import '../styles/swiper.css';

function Projects (props) {
    const [activeProject, setActiveProject] = useState(null);
    let location = useLocation();
    const currentProjectName = location.pathname.replace('/projects/', '');
    const matchingProjects = props.projectsData.filter((project) => {
        return project.uri.indexOf(currentProjectName) !== -1;
    });
    const projectIndex = props.projectsData.indexOf(matchingProjects[0]);
    const projects = props.projectsData.map((project) => (
        <ProjectThumb {...project}/>
    ));
    const swiperParams = {
        slidesPerView: 'auto',
        centeredSlides: true,
        direction: 'vertical',
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        mousewheelControl: projectIndex < 0,
        keyboardControl: projectIndex < 0,
        initialSlide: (projectIndex >= 0) ? projectIndex : 0,
        onSlideChangeEnd: (swiper) => {
            // console.log(swiper.activeIndex);
            // setActiveProject(projectsData[swiper.activeIndex].uri);
        }
    }
    return activeProject ? (
        <Navigate push to={'/projects/' + activeProject} />
    ) : (
        <div className="projects">
            <Swiper {...swiperParams}>
                {projects}
            </Swiper>
        </div>
    );
}

export default Projects;
