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
                    <h3>Customer Reviews(3)</h3>
                    <div className="review-content">
                        {
                            newReview.map(review => <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                    <div className="theme-link">
                        <Link to="/reviews">See All Reviews</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;