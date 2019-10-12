// React
import React from 'react';

// Local
import Navbar from './navbar/';
import Sidebar from './sidebar/';
import BigBackground from './bigBackground/';
import WorkingExp from './workingExp/';
import Skills from './skills/';
import Education from './education/';
import Achievements from './achievements/';
import QuickBio from './quickBio/';
import Footer from './footer/';

const Home = () => (
    <div>
        <Navbar />
        <Sidebar />
        <BigBackground />
        <WorkingExp />
        <Skills />
        <Education />
        <Achievements />
        <QuickBio />
        <Footer />
    </div>
)

export default Home;
