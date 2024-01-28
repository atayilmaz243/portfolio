import React from 'react';
import About from './components/about';
import Top from './components/top';
import './styles/scroll.css';
import Projects from './components/projects';

const Home = ({darkMode,setDarkMode}) => {
    return (
        <div className = 'flex dark:bg-neutral-800 c1:pb-4 bg-slate-100 bg_trans justify-center '>
            <div className='dark:bg-neutral-900 bg-white bg_trans c1:w-800 w-screen flex flex-col items-center relative rounded dark:text-neutral-300 pb-12'>
                <Top darkMode = {darkMode} setDarkMode = {setDarkMode}/>
                <About darkMode= {darkMode}/>
                <Projects />
            </div>
        </div>
  );
};

export default Home;
