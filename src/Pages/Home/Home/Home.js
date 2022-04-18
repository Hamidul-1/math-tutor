import React from 'react';
import Banner from '../Banner/Banner';
import Mathematicians from '../Mathematicians/Mathematicians';
import Services from '../Services/Services';

const Home = () => {
    return (
        // Home Page
        <div>
            <Banner></Banner>
            <Services></Services>
            <Mathematicians></Mathematicians>
        </div>
    );
};

export default Home;