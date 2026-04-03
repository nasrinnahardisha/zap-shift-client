import React from 'react';
import Banner from './Banner';
import Services from './Services';
import LogoMarquee from './LogoMarquee';
import Works from './Works';
import Benifits from './Benifits';
import MerchantSection from './MerchantSection';
import Carousel from './Carousel';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div className=''>
         <Banner></Banner>
         <Works></Works>
         <Services></Services>
         <LogoMarquee></LogoMarquee>
         <Benifits></Benifits>
         <MerchantSection></MerchantSection>
         <Carousel></Carousel>
         <FAQ></FAQ>
        </div>
    );
};

export default Home;