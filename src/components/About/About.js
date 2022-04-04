import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-area'>
            <div className="theme-container">
                <h3>More About It</h3>
                <p>If you don't have this Smart Watch, you will miss something from your smart life. So please collect one and join our family. This is one of the best watch in the world right now. You can enjoy all latest features easily.</p>
                <p><b>Features</b></p>
                <ul>
                    <li>The watch comes with a stress monitor that reads your HRV (Heart Rate Variabilities) to indicate stress levels.</li>
                    <li>Track all stages of sleep every night and keep a tab on your sleep health with the sleep monitoring feature on the watch.</li>
                    <li>The watch also monitors your heart rate and SPO2 (blood oxygen levels) to keep a tab on your overall health.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;