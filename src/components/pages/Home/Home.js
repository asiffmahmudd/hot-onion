import React from 'react';
import Header from '../../common/Header';
import Banner from './Banner/Banner';
import Options from './Options/Options';

const Home = () => {
    return (
        <div className='pb-5'>
            <Header />
            <Banner />
            <Options />
        </div>
    );
};

export default Home;