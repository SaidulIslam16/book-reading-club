import React from 'react';
import Profile from '../../profile.jpg'
import './Details.css'
// Font awesome

const Details = () => {
    return (
        <div className='details'>
            <div className='profile' >
                <img src={Profile} alt="" />
                <div className='profile-details'>
                    <h3>Saidul Islam</h3>
                    <p> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
                <h2>Education</h2>
                <div className="education-dtls">
                    <h3>Programing Hero</h3>
                    <p>Batch: 6</p>
                    <p>Age: 30</p>
                </div>
            </div>
            <div className="add-break-section">
                <h2>Add a Break</h2>
                <div className="add-break">
                    <button><span>10</span>min</button>
                    <button><span>15</span>min</button>
                    <button><span>20</span>min</button>
                    <button><span>30</span>min</button>
                </div>
            </div>
            <div className="reading-details-section">
                <h2>Reading Details</h2>
                <div className="reading-time-dtls">
                    <p>Reading Time: <span className='min'>min</span></p>
                </div>
                <div className="break-time-dtls">
                    <p>Break Time: <span className='hours'>hours</span></p>
                </div>
            </div>
            <div>
                <button className='complete-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Details;