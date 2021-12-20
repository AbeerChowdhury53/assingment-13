import React from 'react';
import Carosal from '../Carosal/Carosal';
import Explore from '../Explore/Explore';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Rateing from '../Rateing/Rateing';
import Ratings from '../Ratings/Ratings';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Explore></Explore>
          <Services></Services>
          <Ratings></Ratings>
          <Faq></Faq>
          <Footer></Footer>
        </div>
    );
};

export default Home;