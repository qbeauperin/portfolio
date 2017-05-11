import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Header = ({ home }) => (
    <div className={'header' + (home.isExact ? ' home' : '')}>
        <div className="intro">
            <Link to="/" className="name">quentin beauperin</Link>
            <div className="status">front-end developer</div>
        </div>
        <Breadcrumbs/>
    </div>
);

export default Header;
