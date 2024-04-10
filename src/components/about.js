
import light_bg from '../images/wintrcompressed.png'
import { GitHub, LinkedIn } from './svg';
import "../styles/animation.css"
import Projects from './projects';


const text = {
    turkish : {about1:"Merhaba, ben Ata, teknoloji ve programlamaya tutkulu bir Bilgisayar Mühendisliği öğrencisiyim. JavaScript, React, Node.js, C, C++, Python, MySQL ve Firebase gibi çeşitli programlama araçlarını kullanarak çeşitli projeler üretiyorum.",
        about2: "Geliştirdiğim projelere ek olarak algoritma alanına ilgi duyuyorum. Algoritma çözmeyi benim için bulmaca çözmek gibi nitelendirebilirim. Hem zevk aldığım hem de çözerken algoritmik düşünme becerimi geliştirdiğime inandığım bir uğraş. ",
        about3: "Yaptığım çalışmaları incelemek, algoritma ile ilgili aktivitemi görüntülemek için aşağıdaki link ve projeler kısmına göz atabilirsiniz."
    },
    english : {about1:"Hi, I'm Ata, a Computer Engineering student from Turkey with a passion for technology and programming. My experience includes working with a variety of programming tools such as JavaScript, React, Node.js, C, C++, Python, MySQL, and Firebase. While I'm not an expert in any single area, I have a good understanding of these tools and know how to use them effectively in my projects.",
    about2: "I have a strong interest in algorithms, which are like complex puzzles in the world of programming. I enjoy solving algorithm problems, which has been a significant part of my learning journey and helped sharpen my problem-solving skills. Currently, I'm focusing on expanding my knowledge in other areas of technology.",
    about3: "To see some of the work I've done, including my experience with solving algorithm problems and various projects, check out the links and project section below. They highlight my journey in computer engineering and my dedication to learning and growing in this exciting field.",}
    
}
export default function About({darkMode,language})
{
    return ( <>
        {darkMode ? <img className = 'absolute z-10 top-0 w-screen object-cover h-80 opacity-20' src = {light_bg} alt = ''/> : <img className = 'absolute z-10 top-0 w-screen object-cover h-80 opacity-20' src = {light_bg} alt = ''/>}
        <div className = 'c1:w-800 c2:w-11/12 w-10/12 h-80 flex flex-col justify-center c2:items-center pt-12 relative z-20 load-page-animation2'>
            <p className = 'text-4xl'>👋</p>
            <p className = 'text-4xl font-semibold mt-6 dark:text-neutral-300'><span className = "text-sky-600 dark:text-blue-300 font-semibold">{language === "turkish" ? "Merhaba" : "Hi" }</span>, {language === "turkish" ? "ben Ata" : "I'm Ata"} </p>
            {/* <p className = 'text-xl c2:text-2xl mt-8 text-sky-600 dark:text-blue-300 font-semibold'>I’m computer engineering student living in Turkey</p> */}
        </div>
        <span className = 'load-page-animation flex flex-col items-center'>
            <div className = 'c1:w-600 w-10/12 flex flex-col mt-10'>
                <p className = 'text-2xl font-semibold underline underline-offset-8 decoration-2 decoration-gray-400/40'>{language === "turkish" ? "Hakkımda" : "About Me"}</p>
                <p className = 'whitespace-normal mt-4 text-justify dark:text-gray-300'>{language === "turkish" ? text.turkish.about1 : text.english.about1}</p>
                <p className = 'whitespace-normal mt-4 text-justify dark:text-gray-300'>{language === "turkish" ? text.turkish.about2 : text.english.about2}</p>
                <p className = 'whitespace-normal mt-4 text-justify dark:text-gray-300'>{language === "turkish" ? text.turkish.about3 : text.english.about3}</p>
            </div>

            <div className = 'c1:w-600 w-10/12 flex flex-wrap mt-6 gap-2'>
                <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://github.com/atayilmaz243', '_blank');}}><div><GitHub /></div><div>GitHub</div></div>
                <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://www.example.com', '_blank');}}><div><LinkedIn /></div><div>LinkedIn</div></div>
                <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open('https://leetcode.com/hakanatayilmaz243/', '_blank');}}><div>Leetcode</div></div>

            </div>
            <Projects language={language} />
        </span>
        </>



    );
}