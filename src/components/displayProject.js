import { useNavigate, useParams } from "react-router-dom";
import { GitHub, Globe, GoBack, Loading, Moon, Sun } from "./svg";
import { firestore } from "../firebase";
import {doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";

async function Info(id,language)
{
    const docRef = doc(firestore,`${id}`,'info');
    try {
        const docobj =  await getDoc(docRef);
        if (!docobj.exists())
        {
            // navigate("/error");
            return null;
        }

        // console.log(docobj.data());
        return (
            <>
                <div className = 'text-2xl c1:w-600 w-10/12 mt-4 flex items-center gap-2 font-semibold dark:text-gray-300'>
                    {docobj.data().icon && <img className = "w-6 h-6 object-cover" src = {docobj.data().icon} alt = ""/>}
                    <div>
                        {docobj.data().header}
                    </div>
                </div>
                <div className = 'c1:w-600 w-10/12 text-justify mt-8 dark:text-gray-300 text-gray-900' >
                    {docobj.data().descriptionTR ? (language === "turkish" ? docobj.data().descriptionTR :docobj.data().description) : docobj.data().description}
                </div>
                <div className = 'c1:w-600 w-10/12 flex flex-wrap mt-6 gap-2'>
                    {docobj.data().github && <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open(docobj.data().github, '_blank');}}><div><GitHub /></div><div>GitHub</div></div>}
                    {docobj.data().web && <div className = "h-8 dark:bg-neutral-800 rounded bg-slate-100 bg_trans text-center pr-2 pl-2 gap-2 flex items-center cursor-pointer dark:hover:text-neutral-100" onClick={() => {window.open(docobj.data().web, '_blank');}}><div><Globe /></div><div>{language == 'turkish' ? "Web'de incele": "Inspect on Web"}</div></div>}
                </div>
            </>
        );
    } catch (error) {
        console.log(error);
        // navigate('/error');
    };

}

async function Features(id,language) {
    try {
        const docRef = doc(firestore, `${id}`, 'features');
        const docSnapshot = await getDoc(docRef);

        if (!docSnapshot.exists()) {
            return null;
        }

        const data = docSnapshot.data();
        const count = data.count;
        const type = data.type;
        let arr = [];

        for (let i = 1; i <= count; i++) {
            if (type === 1)
            {
                arr.push(
                    <div key={i} className='box-border w-full h-28 flex justify-between'>
                        <div className='c1:w-400 w-8/12 box-border pl-2 pr-8 h-full flex justify-center flex-col'>
                            <div className="font-semibold ">
                                {data[`${i}`][0]}
                            </div>
                        </div>
                        <img className='c1:w-200 w-4/12 h-full object-cover shadow-md rounded' src={data[`${i}`][1]} alt='' />
                    </div>  
                ); 
            }
            else
            {
                arr.push(
                    <div key={i} className='box-border w-full h-100 flex flex-col items-center justify-between'>
                        <div className='w-full box-border h-full flex justify-center'>
                            <div className="font-semibold text-lg flex justify-center mb-2 mt-2">
                                {data[`${i}`][0]}
                            </div>
                        </div>
                        <img className='w-full h-full object-contain shadow-md rounded' src={data[`${i}`][1]} alt='' />
                    </div>  
                ); 

            }
        }

        return (
            <div className='c1:w-600 w-10/12 mt-12 relative'>
                <div className='text-xl font-semibold'>Features</div>
                <div className='w-full h-0.5 bg-gray-400/40 rounded mb-4'></div>
                <div className='flex flex-col gap-5 pb-12'>{arr}</div>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default function DisplayProject({darkMode,setDarkMode,language,setLanguage})
{
    const navigate = useNavigate();
    const [Sinfo,setInfo] = useState(null);
    const [Sfeatures,setFeatures] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData()  { 
            const [resInfo,resFeatures] = await Promise.all([Info(id,language),Features(id,language)]);
            
            setInfo(resInfo);
            setFeatures(resFeatures);

        }
        fetchData();
    },[id,language])


    return (
        <div className = 'flex bg-slate-100 bg_trans dark:bg-neutral-800 justify-center items-center c1:pt-4 c1:pb-4'>

            <div className='dark:bg-neutral-900 bg-white bg_trans c1:w-800 w-screen flex flex-col items-center relative rounded dark:text-neutral-300 pb-12 min-h-screen'>
                <span className = 'load-page-animation flex flex-col flex flex-col items-center'>
                    <div className = 'flex c1:w-600 w-10/12 mt-12 items-center justify-between'>
                        <div onClick = {() => {navigate('/portfolio/')}}>
                            <GoBack />
                        </div>
                        <div className = 'flex items-center'>
                            <div className = 'text-lg font-medium cursor-pointer ml-8 mr-0' onClick={() => {
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
                            <div onClick={() => {setDarkMode(!darkMode)}}>
                                {!darkMode ? <Sun /> : <Moon />}
                            </div>

                        </div>
                    </div>

                    {Sinfo ? 
                    <> 
                        {Sinfo}
                        {Sfeatures}
                    </> :
                        <div className = 'flex fixed w-screen h-screen items-center justify-center pointer-events-none'>
                            <Loading />
                        </div>
                    }   

                </span>
            </div>
        </div>
    );
}