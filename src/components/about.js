
import light_bg from '../images/wintr.png'
import { GitHub, LinkedIn } from './svg';

export default function About({darkMode})
{
    return ( <>
        {darkMode ? <img className = 'absolute z-10 top-0 w-screen object-cover h-80 opacity-20' src = {light_bg} alt = ''/> : <img className = 'absolute z-10 top-0 w-screen object-cover h-80 opacity-20' src = {light_bg} alt = ''/>}
        <div className = 'c1:w-800 c2:w-11/12 w-10/12 h-80 flex flex-col justify-center c2:items-center pt-12 relative z-20'>
            
            <p className = 'text-4xl'>👋</p>
            <p className = 'text-4xl font-semibold mt-6 dark:text-neutral-300'>Hi, I'm Ata</p>
            <p className = 'text-xl c2:text-2xl mt-8 text-sky-600 dark:text-blue-300 font-semibold'>I’m computer engineering student living in Turkey</p>
        </div>
        <div className = 'c1:w-600 w-10/12 flex flex-col mt-10'>
            <p className = 'text-2xl font-semibold underline underline-offset-8 decoration-2 decoration-gray-400/40'>About me</p>
            <p className = 'whitespace-normal mt-4 text-justify dark:text-gray-300'>Hi, I'm Ata, a Computer Engineering student from Turkey with a passion for technology and programming. My experience includes working with a variety of programming tools such as JavaScript, React, Node.js, C, C++, Python, MySQL, and Firebase. While I'm not an expert in any single area, I have a good understanding of these tools and know how to use them effectively in my projects.</p>
            <p className = 'whitespace-normal mt-4 text-justify dark:text-gray-300'>I have a strong interest in algorithms, which are like complex puzzles in the world of programming. I enjoy solving algorithm problems, which has been a significant part of my learning journey and helped sharpen my problem-solving skills. Currently, I'm focusing on expanding my knowledge in other areas of technology.</p>
            <p className = 'whitespace-normal mt-4 text-justify dark:text-gray-300'>To see some of the work I've done, including my experience with solving algorithm problems and various projects, check out the links and project section below. They highlight my journey in computer engineering and my dedication to learning and growing in this exciting field.</p>
        </div>

        <div className = 'c1:w-600 w-10/12 flex flex-wrap mt-6 gap-2'>
            <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://github.com/atayilmaz243', '_blank');}}><div><GitHub /></div><div>GitHub</div></div>
            <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://www.example.com', '_blank');}}><div><LinkedIn /></div><div>LinkedIn</div></div>
            <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://www.example.com', '_blank');}}><div>Codeforces</div></div>
            <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://leetcode.com/hakanatayilmaz243/', '_blank');}}><div>Leetcode</div></div>
            <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://www.hackerrank.com/profile/hakanatayilmaz21', '_blank');}}><div>HackerRank</div></div>

        </div>
        </>



    );
}