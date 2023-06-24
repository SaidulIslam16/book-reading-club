import React, { useEffect, useState } from 'react';
import Profile from '../../profile.jpg'
import './Details.css'
import { addToDb, getBreakTime } from '../../utilities/database';
// Font awesome

const Details = ({ seledtedBooks, toastHandlr }) => {
    const [breakTime, setBreakTime] = useState(0);
    const [selectedBtn, setSelectedBtn] = useState(null)
    const addBreak = (min) => {
        setBreakTime(min)
        addToDb(min);
        setSelectedBtn(min);
    }

    useEffect(() => {
        const selectedBreakTime = getBreakTime();
        setBreakTime(selectedBreakTime);
    }, [])



    // Calculating total time of reading
    let readingTime = 0;
    seledtedBooks.forEach(book => {
        readingTime += parseFloat(book.estimated_time_to_finish);
    });

    // main return of the details component
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
                    <button onClick={() => addBreak(10)} className={selectedBtn === 10 ? 'selected' : ''}><span>10</span>min</button>
                    <button onClick={() => addBreak(15)} className={selectedBtn === 15 ? 'selected' : ''}><span>15</span>min</button>
                    <button onClick={() => addBreak(20)} className={selectedBtn === 20 ? 'selected' : ''}><span>20</span>min</button>
                    <button onClick={() => addBreak(30)} className={selectedBtn === 30 ? 'selected' : ''}><span>30</span>min</button>
                </div>
            </div>
            <div className="reading-details-section">
                <h2>Reading Details</h2>
                <div className='selected-book-numbers'>
                    <p className='selected-book-numbers'>Books Selected: {seledtedBooks.length}</p> <button className='review-btn'>Review</button>
                </div>
                <div className="reading-time-dtls">
                    <p>Break Time: <span className='min'> {breakTime} min</span></p>
                </div>
                <div className="break-time-dtls">
                    <p>Reading Time: <span className='hours'> {readingTime} hours</span></p>
                </div>
            </div>
            <div>
                <button className={toastHandlr.completedBtnClass} onClick={toastHandlr.handleToastClick}>{toastHandlr.completedBtnText}</button>
            </div>
        </div>
    );
};

export default Details;