import React from 'react';
import { Link, Route } from 'react-router-dom';
import Projects from './Projects';
import './Header.css';

class Header extends React.Component {
    render() {
        let currentPage = 'header';
        const pathname = this.props.location.pathname;
        if(pathname === '/') {
            currentPage += ' home';
        }else if(pathname === '/projects') {
            currentPage += ' projects-page';
        }else if(pathname.indexOf('/projects/') !== -1){
            currentPage += ' project-page';
        }
        return (
            <div className={currentPage}>
                <div className="intro">
                    <Link to="/" className="name">quentin beauperin</Link>
                    <div className="status">front-end developer</div>
                </div>
                <div className="breadcrumbs">
                    <Link to="/projects" className="underline">projects</Link>
                    <div className="separator">></div>
                    <Route path="/projects" children={props => (
                        <Projects {...props} projectsData={this.props.projects}/>
                    )}/>
                </div>
            </div>
        )
    }
};

export default Header;
