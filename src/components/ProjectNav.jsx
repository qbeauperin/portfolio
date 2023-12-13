import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNav.css';

function ProjectNav (props) {
    const { previous, next } = props;
    return (
        <nav className="project-nav">
            {previous &&
                <Link 
                    className="project-nav__previous"
                    to={`/projects/${previous.uri}`}
                >
                    <span className="label">{'< Newer project'}</span>
                    <span className="name">{previous.name}</span>
                </Link>
            }
            {next &&
                <Link 
                    className="project-nav__next"
                    to={`/projects/${next.uri}`}
                >
                    <span className="label">{'Older project >'}</span>
                    <span className="name">{next.name}</span>
                </Link>
            }
        </nav>
    )
}

export default ProjectNav;
