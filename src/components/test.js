
import { useNavigate } from "react-router-dom";
import p1 from "../images/gif_visualizer/1.gif";
import p2 from "../images/gif_visualizer/2.gif";
import p3 from "../images/gif_visualizer/3.gif";
import { GoBack, Moon, Sun } from "./svg";
import { firestore } from "../firebase";
import { useEffect } from "react";

async function Info({navigate})
{
    await firestore.collection('1').doc('info').get().then((doc) => {
        if (!doc.exists)
        {
            navigate("/error");
        }

        return (
            <>
                <div className = 'text-2xl w-600 mt-4 font-semibold dark:text-gray-300'>
                    {doc.data().header}
                </div>
                <div className = 'w-600 text-justify mt-8 dark:text-gray-300 text-gray-900' >
                    {doc.data().describe}
                </div>
            </>
        );

    });

}

function Features()
{

}

export default function DisplayProject({darkMode,setDarkMode})
{
    useEffect(() => {

    },[]);

    const navigate = useNavigate();
    return (
        <div className = 'flex w-screen bg-slate-100 bg_trans dark:bg-neutral-800 justify-center items-center pt-4 pb-4'>

            <div className='dark:bg-neutral-900 bg-white bg_trans w-800 flex flex-col justify-center items-center relative rounded dark:text-neutral-300 pb-12'>
                <div className = 'flex gap-4 w-600 mt-12'>
                    <div onClick = {() => {navigate('/')}}>
                        <GoBack />
                    </div>
                    <div onClick={() => {setDarkMode(!darkMode)}}>
                        {!darkMode ? <Sun /> : <Moon />}
                    </div>
                </div>
                
                <div className = 'text-2xl w-600 mt-4 font-semibold dark:text-gray-300'>
                    Path Visualizer
                </div>
                <div className = 'w-600 text-justify mt-8 dark:text-gray-300 text-gray-900' >
                    I used the React framework and JavaScript to create and implement a visualizer for common pathfinding algorithms, including Dijkstra, A*, Breadth-First Search, and Depth-First Search. This tool is designed to help understand these algorithms better. For the source code, you can visit the provided GitHub links. Additionally, there's a web server hosting a live demo of this project, showcasing the code in action.
                </div>
                <div className = 'w-600 mt-12 relative'>
                    <div className = 'text-xl font-semibold'>
                        Features
                    </div>
                    <div className = 'w-full h-0.5 bg-gray-400/40 rounded mb-4'></div>
                    <div className = 'flex flex-col gap-5 h-400 overflow-y-auto'>
                        <div className = 'box-border w-full h-28 flex justify-between'>
                            <div className = 'w-400 box-border pl-2 pr-8 h-full flex justify-center flex-col'>
                                <div className="font-semibold text-lg">
                                    Press the mouse to add obstacles, and click to freely move the source and destination as you like.
                                </div>
                            </div>
                            <img className = 'w-200 h-full object-cover shadow-md rounded' src={p1} alt = ''/>
                        </div>  
                        <div className = 'box-border w-full h-28 flex justify-between'>
                            <div className = 'w-400 box-border pl-2 pr-8 h-full flex justify-center flex-col'>
                                <div className="font-semibold text-lg">
                                    Create random maze
                                </div>
                            </div>
                            <img className = 'w-200 h-full object-cover shadow-md rounded' src={p2} alt = ''/>
                        </div>
                        <div className = 'box-border w-full h-28 flex justify-between'>
                            <div className = 'w-400 box-border pl-2 pr-8 h-full flex justify-center flex-col'>
                                <div className="font-semibold text-lg">
                                    Visualize!
                                </div>
                            </div>
                            <img className = 'w-200 h-full object-cover shadow-md rounded' src={p3} alt = ''/>
                        </div> 
                    </div> 

                </div>
            </div>
        </div>
    );
}