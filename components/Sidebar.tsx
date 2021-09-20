import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineDownload } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div>
            <Image
                src="/static/my-image.jpg"
                width="150"
                height="150"
                alt="avatar image"
                className="mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-purple">Marcelle </span>
                Mendes
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Front-End Developer</p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full "
                href=""
                download="">
                <AiOutlineDownload className="w-6 h-6 mx-1"/>
                Download Resume
            </a>
            {/* //social icon */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full">
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiOutlineTwitter className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
             {/* address */}
            <div className="py-4 my-5 bg-gray-200"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className="flex items-center justify-center space-x-1">
                    <GoLocation/>
                    <span>Working Remotely</span>
                </div>
                <p className="my-2">marcellee.mendess@gmail.com</p>
            </div>
            {/* Email and toggle button */}
            <button 
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-red-400 focus:outline-none" 
                onClick={() => window.open('mailto:marcellee.mendess@gmail.com')}>
                Email me   
            </button>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-red-400">Dark Mode </button>
            
           
        </div>
    )
}

export default Sidebar
