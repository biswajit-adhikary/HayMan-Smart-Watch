import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound-area'>
            <div className="theme-container">
                <h3>404</h3>
                <h2>Not Found!</h2>
                <div className="theme-link">
                    <Link to="/">Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;