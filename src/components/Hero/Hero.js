import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../src/product.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className="theme-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h3>HayMan - Smart Watch</h3>
                        <h2>Full of latest features</h2>
                        <p>If you don't have this Smart Watch, you will miss something from your smart life. So please collect one and join our family.</p>
                        <div className="theme-link">
                            <Link to="/about">Learn More</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;