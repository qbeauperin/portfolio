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
                <span className="wrap">
                    <span className="image" style={{ backgroundImage: 'url('+this.props.img+')' }}></span>
                    <span className="infos">
                        <span className="center">
                            <span className="name">{this.props.name}</span>
                            <span className="techs">{this.props.techs}</span>
                        </span>
                    </span>
                </span>
            </NavLink>
        );
    }
}

export default ProjectThumb;
