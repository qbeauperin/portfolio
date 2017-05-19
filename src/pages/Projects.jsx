import React from 'react';
import { Redirect } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import '../styles/swiper.css';
import ProjectThumb from '../components/ProjectThumb';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        }
    }
    render() {
        const currentProjectName = this.props.location.pathname.replace('/projects/', '');
        const projectsData = [
            {key: 1, name: 'Leon and Harper', 'uri': 'leon-and-harper', techs: 'magento, sass, grunt, bootstrap', 'img': 'https://unsplash.it/301/300/?random'},
            {key: 2, name: 'Travel journal', 'uri': 'travel-journal', techs: 'react, html5, sass', 'img': 'https://unsplash.it/302/300/?random'},
            {key: 3, name: 'Natalys', 'uri': 'natalys', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/301/?random'},
            {key: 4, name: 'Maille Leo', 'uri': 'maille-leo', techs: 'react, html5, sass', 'img': 'https://unsplash.it/300/302/?random'},
            {key: 5, name: 'Nisop', 'uri': 'nisop', techs: 'react, html5, sass', 'img': 'https://unsplash.it/301/301/?random'},
            {key: 6, name: 'Oxbow SUP', 'uri': 'oxbow-sup', techs: 'react, html5, sass', 'img': 'https://unsplash.it/302/302/?random'},
            {key: 7, name: 'Le Ptio', 'uri': 'le-ptio', techs: 'react, html5, sass', 'img': 'https://unsplash.it/301/302/?random'}
        ];
        const matchingProjects = projectsData.filter((project) => {
            return project.uri.indexOf(currentProjectName) !== -1;
        });
        const projectIndex = projectsData.indexOf(matchingProjects[0]);
        const projects = projectsData.map((project) => (
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
