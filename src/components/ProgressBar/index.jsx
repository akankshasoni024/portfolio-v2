// CircleChartComponent.js
import React from 'react';
import "./styles.css";

const ProgressBar = ({ percentage, subject, icon }) => {

    return (
        <div className='skills-bars'>
            <div className='skills'>
                <div className='skill-name'><i className={icon} style={{ color: " #d13639" }}></i> {subject}</div>
                <div className='skill-bar' >

                    <div className='skill-per percentage' per={percentage} style={{ width: percentage }} >
                    </div>
                </div>

            </div>
        </div >
    )
};

export default ProgressBar;
