import React from 'react';
import Banner from '../../components/Banner.js/index.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header.js';
import HomeComp from './HomeComp';

const Home = () => {
    return(
        <div>
            {/* Header */}
             <Header />
            {/*  */}
            <Banner />
            {/*  */}
            <HomeComp />
            {/*  */}
            <Footer />
        </div>
    )
};

export default Home;