import React from 'react';
import './Book.css'

const Book = ({ book, addToList }) => {
    // console.log(books.book_title)
    const { book_cover_image, book_title, description, estimated_time_to_finish, author } = book;
    // console.log(book)
    return (
        <div className='book'>
            <img src={book_cover_image} alt="" />
            <h2>{book_title}</h2>
            <p><span className='author'>Author:</span> {author}</p>
            <p>{description}</p>
            <p>Time Required to Finish: <span className='reading-time'>{estimated_time_to_finish} hours</span></p>
            <button className='add-to-list-btn' onClick={() => addToList(book)}>Add to List</button>
        </div>
    );
};

export default Book;