import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, picture, rating, text } = review;
    return (
        <div className='single-review'>
            <p>{text}</p>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <span>Rating: {rating}</span>
        </div>
    );
};

export default Review;