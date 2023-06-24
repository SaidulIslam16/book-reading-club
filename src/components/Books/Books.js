import React from 'react';
import logo from '../../logo.png'
import './Books.css'
import Book from '../Book/Book';

const Books = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" />
                <h2>Book Reading Club</h2>
            </div>
            <h2>Select Today's Books</h2>
            <div className='books'>
                <Book></Book>
            </div>
        </div>
    );
};

export default Books;