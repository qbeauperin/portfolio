import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

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
                <Breadcrumbs/>
            </div>
        )
    }
};

export default Header;
