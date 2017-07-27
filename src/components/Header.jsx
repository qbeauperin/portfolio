import React from 'react';
import { Link, Route } from 'react-router-dom';
import Projects from './Projects';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mounted: false };
    }
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ mounted: true });
        });
    }
    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }
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
        let statusClass = 'status' + (this.state.mounted ? '' : ' mounting');
        return (
            <div className={currentPage}>
                <div className="intro">
                    <Link to="/" className="name">quentin beauperin</Link>
                    <div className={statusClass}>front-end developer</div>
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
