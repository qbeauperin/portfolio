import React from 'react';
import { Link } from 'react-router-dom';

class ProjectThumb extends React.Component {
    render() {
        return (
            <Link
                to={'/projects/' + this.props.uri}
                key={this.props.key}
                className="project swiper-slide"
            >
                <span>{this.props.name}</span>
            </Link>
        );
    }
}

export default ProjectThumb;
