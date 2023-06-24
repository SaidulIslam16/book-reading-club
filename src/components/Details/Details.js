import React from 'react';
import Profile from '../../profile.jpg'
import './Details.css'

const Details = () => {
    return (
        <div className='details'>
            <div className='profile' >
                <img src={Profile} alt="" />
                <div>
                    <h3>Saidul Islam</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;