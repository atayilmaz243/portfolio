

import { Sun } from "./svg";
import { Moon } from "./svg";


export default function Top({darkMode,setDarkMode,setContactOpen})
{



    return (
        <div className = 'fixed flex justify-center c1:w-800 w-screen top-0 h-12 backdrop-blur-md z-30'>
            <div className = 'flex c1:w-600 c1:justify-between gap-6 c1:gap-0 h-full dark:text-neutral-300 items-center'>
                <div className = 'flex items-center'>
                    <div className= "cursor-pointer" onClick={() => {setContactOpen(true);}}>
                        Contact
                    </div>
                </div>
                <div className = 'flex items-center'>
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