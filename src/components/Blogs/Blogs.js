import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-area'>
            <div className="theme-container">
                <h2>Our Blogs</h2>
                <div className="all-blog-post">
                    <div className="single-blog-post">
                        <h3>What is Context API?</h3>
                        <p>In React "Context API" is a very power-full system for pass data through the child components without props drilling. In React we can send data from Parent component to child component. If there lots of child components, it Context API is the best system of pass data easily. It create a Context.Provider area and this area any child can receive data easily without any problem. Also we can change the data easily from all components. Context API send data like a tree structure.</p>
                    </div>
                    <div className="single-blog-post">
                        <h3>What is Semantic TAG?</h3>
                        <p>Semantic tag clearly describe it's content type. It help both the browser and developer for understand the website part easily. Semantic tag makes the website more SEO friendly. Semantic tag names are meaning full, like: header tag, footer tag, article tag etc. It help the website to easily split section by section. It make some seance for every part of the website. The elements are specifies and independent here.</p>
                    </div>
                    <div className="single-blog-post">
                        <h3>Difference between inline, block, inline-block?</h3>
                        <p>Inline element takes it's content space. We don't set any height or width in the Inline element. Inline-block also takes it's content space but we can set height and width easily. On the other hand block element take the full space of it's parent div's right side. Inline and inline-block element can put side by side. But block element take the full space of it's parent div and don't put side by side. Block element create new lines for his every element. We can find the different easily when we set background on the elements.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;