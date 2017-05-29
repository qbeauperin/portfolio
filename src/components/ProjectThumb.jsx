import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectThumb.css';

class ProjectThumb extends React.Component {
    render() {
        return (
            <Link
                to={'/projects/' + this.props.uri}
                key={this.props.key}
                className="project-thumb swiper-slide"
            >
                <span className="underline">{this.props.name}</span>
            </Link>
        );
    }
}

export default ProjectThumb;
