import React from 'react';
import { Redirect } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import ProjectThumb from './ProjectThumb';
import './Projects.css';
import '../styles/swiper.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        }
    }
    render() {
        const currentProjectName = this.props.location.pathname.replace('/projects/', '');
        const matchingProjects = this.props.projectsData.filter((project) => {
            return project.uri.indexOf(currentProjectName) !== -1;
        });
        const projectIndex = this.props.projectsData.indexOf(matchingProjects[0]);
        const projects = this.props.projectsData.map((project) => (
            <ProjectThumb {...project}/>
        ));
        const swiperParams = {
            slidesPerView: 'auto',
            centeredSlides: true,
            direction: 'vertical',
            slideToClickedSlide: true,
            mousewheelControl: projectIndex < 0,
            keyboardControl: projectIndex < 0,
            initialSlide: (projectIndex >= 0) ? projectIndex : 0,
            onSlideChangeEnd: (swiper) => {
                // console.log(swiper.activeIndex);
                // this.setState({
                //     project: projectsData[swiper.activeIndex].uri
                // });
            }
        }
        if(this.state.project){
            return <Redirect push to={'/projects/' + this.state.project} />
        }
        return (
            <div className="projects">
                <Swiper {...swiperParams}>
                    {projects}
                </Swiper>
            </div>
        );
    }
}

export default Projects;
