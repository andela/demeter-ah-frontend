import React from 'react';
import Banner from './Banner';
import Showcase from './Showcase';
import More from './More';
import About from './About';
import Footer from './Footer';

const Home = () => (
  <div className="home">
    <Banner />
    <Showcase />
    <About />
    <More />
    <Footer />
  </div>
);

export default Home;
