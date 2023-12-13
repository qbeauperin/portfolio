import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Projects from './Projects';
import './Header.css';

function Header(props) {
    const [mounted, setMounted] = useState(false);
    let timeout = null;
    let location = useLocation();
    useEffect(() => {
        timeout = setTimeout(() => setMounted(true));
        return () => {
            if(timeout) clearTimeout(timeout);
        }
    }, [])
    let currentPage = getPageClassname(location.pathname);
    let statusClass = 'status' + (mounted ? '' : ' mounting');
    return (
        <div className={currentPage}>
            <div className="intro">
                <Link to="/" className="name">quentin beauperin</Link>
                <div className={statusClass}>front-end developer</div>
            </div>
            <div className="breadcrumbs">
                <Link to="/projects" className="underline">projects</Link>
                <div className="separator">{'>'}</div>
                <Routes>
                    <Route path="*" element={ <Projects projectsData={props.projects} /> } />
                </Routes>
            </div>
        </div>
    )
}

function getPageClassname(pathname) {
    let classname = 'header';
    if(pathname === '/') {
        classname += ' home';
    }else if(pathname === '/projects') {
        classname += ' projects-page';
    }else if(pathname.indexOf('/projects/') !== -1){
        classname += ' project-page';
    }
    return classname;
}

export default Header;
