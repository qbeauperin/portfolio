import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectThumb.css';


function ProjectThumb (props) {
    return (
        <Link
            to={'/projects/' + props.uri}
            key={props.key}
            className="project-thumb swiper-slide"
        >
            <span className="underline">{props.name}</span>
        </Link>
    )
}

export default ProjectThumb;
