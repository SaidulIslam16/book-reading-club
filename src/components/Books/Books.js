import React, { useEffect, useState } from 'react';
import logo from '../../logo.png'
import './Books.css'
import Book from '../Book/Book';
import Details from '../Details/Details';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='books-comp'>
            <div className="books-container">
                <div className='logo'>
                    <img src={logo} alt="" />
                    <h2>Book Reading Club</h2>
                </div>
                <h2>Select Today's Books</h2>
                <div className='books'>
                    {
                        books.map(book => <Book book={book} key={book.book_id} ></Book>)
                    }
                </div>
            </div>
            <div className="details">
                <Details></Details>
            </div>
        </div>
    );
};

export default Books;