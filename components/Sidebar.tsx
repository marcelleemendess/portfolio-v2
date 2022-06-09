import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineDownload } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const email = () => {
        window.open('mailto:marcellee.mendess@gmail.com');
        // dataLayer.push({'event': 'project'});
    }
    return (
        <div>
            <Image
                src="/images/my-image.jpg"
                width="150"
                height="150"
                alt="avatar image"
                className="mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-purple">Marcelle </span>
                Mendes
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Full-Stack </p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500 dark:bg-dark-200"
                href="/assets/Front-End-developer-MarcelleMendes-CV.docx.pdf"
                download="Front-End-developer-MarcelleMendes-CV.docx.pdf">
                <AiOutlineDownload className="w-6 h-6 mx-1 animate-bounce"/>
                Resume
            </a>
            {/* //social icon */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full">
                <a 
                    href="https://github.com/marcelleemendess"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub className="w-8 h-8 transition duration-100 transform cursor-pointer hover:scale-110"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/marcelleemendess"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin className="w-8 h-8 transition duration-100 transform cursor-pointer hover:scale-110"/>
                </a>
                <a
                    href="https://twitter.com/marcelleemendes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineTwitter className="w-8 h-8 transition duration-100 transform cursor-pointer hover:scale-110"/>
                </a>
            </div>
             {/* address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className="flex items-center justify-center space-x-1">
                    <GoLocation/>
                    <span>Working Remotely</span>
                </div>
                {/* <p className="flex items-center justify-center my-2 space-x-1">marcellee.mendess@gmail.com</p> */}
            </div>
            {/* Email and toggle button */}
            <button 
                className="w-8/12 px-5 py-2 text-white transition duration-300 transform bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-red-400 focus:outline-none hover:scale-110" 
                onClick={() => email()}>
                Email    
            </button>
            <button 
                className="w-8/12 px-5 py-2 my-4 text-white transition duration-300 ease-in-out transform bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple to-red-400 hover:scale-110" 
                onClick={changeTheme}>
                Theme 
            </button>  
        </div>
    )
}

export default Sidebar
