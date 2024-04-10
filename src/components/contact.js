import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';


function LoadingSVG()
{
    return <>
        <div role="status">
            <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-200 fill-blue-400 dark:fill-blue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    </>;
}
function Button1({handleSubmit,operation,language})
{
    return <>
        <button onClick = {() => {handleSubmit();}} type="button" className="flex px-3 py-2 text-sm font-medium text-center items-center text-white  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 ">
        <svg className="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
            {operation !== "processing" ?
                (language === "turkish" ? "Gönder" : "Send") : <LoadingSVG /> }
        </button>
    </>
}


function Button2({setContactOpen,language})
{
    return <>
        <button onClick = {() => {setContactOpen(false);}} type="button" className="flex px-3 py-2 text-sm font-medium text-center items-center dark:text-white text-gray-700 bg-slate-200 rounded-md hover:bg-slate-300  focus:outline-none dark:bg-neutral-800 dark:hover:bg-neutral-700 ">
            <svg className="w-4 h-4 dark:text-white text-gray-700 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            {language === "turkish" ? "Kapat" : "Close"}
        </button>
    </>
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

export default function Contact({contactOpen,setContactOpen,darkMode,language})
{
    const [from,setFrom] = useState("");
    const [message,setMessage] = useState("");
    const handleFormChange = (event) => {
        setFrom(event.target.value);
      };


    const [operation,setOp] = useState(null);
    const [headBC,setHBC] = useState(!darkMode ? "#F5F5F5" : "#1E3A8A");
    const [send,setSend] = useState(false);

    const contactRef = useRef();
    
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async () => {
        setOp("processing");
        if (!validateEmail(from) || send || message === "" || message === " ")
        {
            setOp(false);
            setTimeout(() => {
                setOp(null);
            }, 2000);
        }
        else
        {
            var templateParams = {
                message: message,
                from_mail: from
            };

            try {
                await emailjs.send('service_b5ygaok', 'template_xn6d1f8', templateParams, 'F7s2EBv3aQUGNYHfv');
                setOp(true);
                setSend(true);
            } catch (error) {
                setOp(false);
            } finally {
                setTimeout(() => {
                    setOp(null);
                }, 2000);
            }
        }
    };

    useEffect(() => {
        if (darkMode)
        {
            if(operation === false)
            {
                setHBC("#881337");
            }
            else if(operation === true)
            {
                setHBC("#047857");
            }
            else if(operation === null)
            {
                setHBC("#1E3A8A"); 
            }
        }
        else
        {
            if(operation === false)
            {
                setHBC("#E11D48");
            }
            else if(operation === true)
            {
                setHBC("#4ADE80");
            }
            else if(operation === null)
            {
                setHBC("#F5F5F5");
            }

        }
    },[operation,darkMode]);

    const handleClickOutside = (event) => {
        if (contactRef.current && !contactRef.current.contains(event.target)) {
            setContactOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line
    }, []);
    return contactOpen && (<>
        <div className = "w-screen h-screen flex items-center justify-center fixed dark:bg-black dark:c3:bg-opacity-60 bg-white c3:bg-opacity-60 backdrop-blur-sm z-50">
            <div ref = {contactRef} className = "w-full h-full c3:h-auto c3:w-400 gap-6 dark:bg-neutral-900 bg-white rounded-md flex flex-col justify-center c3:justify-normal items-center">
                <div className = "w-full pl-8 pr-8 pt-4 pb-4 c3:rounded-t-md transition-colors duration-1000 ease-in-out dark:text-white text-gray-900" style = {{backgroundColor:headBC}}>
                    <div className = "font-medium text-lg">
                        {language === "turkish" ? "İletişim" : "Contact"}
                    </div>
                    <div className = "font-medium text-sm dark:text-blue-100">
                        {language === "turkish" ? "Lütfen herhangi bir konu için iletişime geçmekten çekinmeyin." : "Please dont hesitate to contact with me about anything."}
                    </div>
                </div>
                <form id = "contactForm" className = "w-full pl-8 pr-8 flex flex-col gap-1 ">
                    <div className = "font-medium">
                        {language === "turkish" ? "Kimden" : "From"}
                    </div>
                    <input className = "w-full h-8 dark:bg-slate-700 bg-neutral-200 rounded-sm pl-2" type = "text" value = {from} onChange={handleFormChange} placeholder= {language === "turkish" ? "Lütfen eposta adresinizi giriniz." : "Please enter your email."} />
                    <div className = "font-medium">
                        {language === "turkish" ? "Kime" : "To"}
                    </div>
                    <input className = "w-full h-8 dark:bg-slate-700 bg-neutral-200 rounded-sm pl-2" type = "text" value = "hakanatayilmaz243@gmail.com" readOnly/>
                    <div className = "font-medium mt-4">
                        {language === "turkish" ? "Mesaj" : "Message"}
                    </div>
                    <textarea className = "w-full h-60 dark:bg-slate-700 bg-neutral-200 rounded-sm pl-2 pt-2 resize-none" type = "text" value = {message} onChange = {handleMessageChange} placeholder={language === "turkish" ? "Mesajınız" : "Your message"}></textarea>
                </form>
                <div className = "w-full">
                    <div className = "dark:bg-neutral-700 bg-neutral-300" style = {{height: 0.4}}>

                    </div>
                    <div className = "w-full pl-8 pr-8 pt-2 pb-2 flex justify-end gap-2">
                        <Button2 setContactOpen = {setContactOpen} language = {language}/>
                        <Button1 handleSubmit = {handleSubmit} operation = {operation} language = {language} />
                    </div>
                </div>

            </div>

        </div>
    </>);

}