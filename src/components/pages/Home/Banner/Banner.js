import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="banner-content">
                    <h1 className="banner-heading">Best food waiting for your belly</h1>
                    <div className="search-input">
                        <div className="form-group mt-2">
                            <input className="form-control" placeholder="Search food items" type="text" />
                            <button className="btn banner-search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;