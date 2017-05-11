import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: ['0']
        };
    }
    addProject(){
        this.setState(Object.assign({}, this.state, {projects: this.state.projects.concat([this.state.projects.length])}));
        if(this.state.projects.length >= 7) clearInterval(this.projectsStagger);
    }
    componentDidMount(){
        this.projectsStagger = setInterval(() => this.addProject(), 50);
    }
    componentWillUnmount(){
        clearInterval(this.projectsStagger);
    }
    render() {
        const projects = this.state.projects.map((number) =>
            <div className="project" key={number}>
                <div className="wrap">
                    {number}
                </div>
            </div>
        );

        return (
            <div className="projects">
                <CSSTransitionGroup
                    transitionName="grid"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}>
                    {projects}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Projects;
