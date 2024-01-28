
import { useNavigate} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import { Loading } from "./svg";

export default function Projects()
{
    const navigate = useNavigate();
    const [jsx,setJsx] = useState(null);

    useEffect(() => {
        async function fetchProjects()
        {
            try {
        
                const docRef = doc(firestore,'projectsHome','projects');
                const docObj = await getDoc(docRef);
                if (!docObj.exists())
                {
                    return null;
                }
                const data = docObj.data();
                console.log(data);
                let arr = [];
                console.log(data.count);
                for (let i=1 ; data.count >=i ; i++)
                {
                    console.log(data[`${i}`]);
                    arr.push(
                        <div key = {i} className = 'box-border w-full h-28 flex justify-between hover:cursor-pointer' onClick={() => {navigate(`portfolio/project/${i}`)}}>
                            <div className = 'c1:w-400 w-8/12 box-border pl-2 pt-2 pr-4 h-full flex flex-col'>
                                <div className="font-semibold c2:text-xl c2:line-clamp-none line-clamp-1">
                                    {data[`${i}`][0]}
                                </div>
                                <div className="c2:line-clamp-3 line-clamp-2">
                                    {data[`${i}`][1]}
                                </div>
                            </div>
                            <img className = 'c1:w-200 w-4/12 h-full object-cover shadow-md rounded' src={data[`${i}`][2]} alt = ''/>
                        </div>
                    );
                }
                setJsx(arr);
            }  catch (error) {
                console.log(error);
                return null;
            }
        }

        
        fetchProjects();
        // eslint-disable-next-line
    },[])

    return (
        <> 
            <div className = 'c1:w-600 w-10/12 flex flex-col mt-12 relative'>
                <p className = 'text-2xl font-semibold'>Projects</p>
                <div className = 'w-full h-0.5 bg-gray-400/40 rounded mb-4'>

                </div>

                <div className = 'flex flex-col gap-5 h-400 overflow-y-auto'>
                    {jsx ? 
                    <>{jsx}</> : 
                        <div className = 'flex w-full h-400 items-center justify-center'>
                            <Loading />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}