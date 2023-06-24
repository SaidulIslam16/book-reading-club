import React from 'react';

const Book = (props) => {
    // console.log(props.books.book_title)
    const { book_cover_image, book_title, description, estimated_time_to_finish, author } = props.book;
    return (
        <div>
            <img src={book_cover_image} alt="" />
            <h2>{book_title}</h2>
            <p>{author}</p>
            <p>{description}</p>
            <p>{estimated_time_to_finish}</p>
        </div>
    );
};

export default Book;