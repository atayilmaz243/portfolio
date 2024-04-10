import React, { useState } from 'react';
import About from './components/about';
import Top from './components/top';
import Projects from './components/projects';
import Contact from './components/contact';
import "./styles/animation.css";
const Home = ({darkMode,setDarkMode,language,setLanguage}) => {
    const [contactOpen,setContactOpen] = useState(false);

    return (
        <div className = 'flex dark:bg-neutral-800 c1:pb-4 bg-slate-100 bg_trans justify-center'>
            <div className='dark:bg-neutral-900 bg-white bg_trans c1:w-800 w-screen flex flex-col items-center relative rounded dark:text-neutral-300 pb-12'>
                <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} darkMode={darkMode} language = {language}/>
                <Top darkMode = {darkMode} setDarkMode = {setDarkMode} setContactOpen = {setContactOpen} setLanguage = {setLanguage} language = {language}/>
                <About darkMode= {darkMode} language={language}/>
            </div>
        </div>
  );
};

export default Home;
