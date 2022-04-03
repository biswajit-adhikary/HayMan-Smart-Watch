import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews] = useReviews();
    const newReview = reviews.slice(0, 3);
    return (
        <>
            <Hero></Hero>
            <div className='review-area'>
                <div className="theme-container">
                    <h3>Product Reviews</h3>
                    <div className="review-content">
                        {
                            newReview.map(review => <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                    <div className="theme-link">
                        <Link to="/reviews">View All</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;