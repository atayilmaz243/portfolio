

import { Sun } from "./svg";
import { Moon } from "./svg";


export default function Top({darkMode,setDarkMode,setContactOpen,language,setLanguage})
{



    return (
        <div className = 'fixed flex justify-center c1:w-800 w-screen top-0 h-12 backdrop-blur-md z-30'>
            <div className = 'flex c1:w-600 c1:justify-between gap-12 c1:gap-0 h-full dark:text-neutral-300 items-center'>
                <div className = 'flex items-center'>
                    <div className= "cursor-pointer text-base font-medium" onClick={() => {setContactOpen(true);}}>
                        {language === "turkish" ? "İletişim" : "Contact"}
                    </div>
                </div>
                <div className = 'flex items-center'>
                    <div className = 'text-base font-medium cursor-pointer' onClick={() => {
                        if (language === "turkish")
                        {
                            setLanguage("english");
                        }
                        else
                        {
                            setLanguage("turkish");
                        }
                    }}>
                        {language === "turkish" ? "TR" : "EN" }
                    </div>
                    <div className = 'w-px h-5 dark:bg-white bg-black mr-2 ml-2 rounded-full'>
                        
                    </div>
                    {darkMode ? 
                        <div onClick={() => {setDarkMode(!darkMode)}}>
                            <Moon />
                        </div>
                    :
                        <div onClick={() => {setDarkMode(!darkMode)}}>
                            <Sun />
                        </div>
                    }

                </div>
            </div>
            

        </div>


    );


}