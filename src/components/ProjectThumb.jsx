import React from 'react';
import { NavLink } from 'react-router-dom';

class ProjectThumb extends React.Component {
    render() {
        return (
            <NavLink
                to={'/projects/' + this.props.uri}
                key={this.props.key}
                className="project swiper-slide"
            >
                <span>{this.props.name}</span>
            </NavLink>
        );
    }
}

export default ProjectThumb;
