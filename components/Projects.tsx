import React, { useState } from "react";
import { projects } from "../data"
import ProjectCard from "./ProjectCard"
import Navbar from "./Navbar"
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const Projects = ({ toggleContent, setToggleContent}) => {
   
    const [showDetail, setShowDetail] = useState<number | null>(null)
    
    return (
        <>
            <Navbar toggleContent={toggleContent} setToggleContent={setToggleContent}/>
            <motion.div
                className="px-5 overflow-y-scroll"
                style={{ height: "65vh" }}
                variants={routeAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <motion.div
                    className="relative grid grid-cols-12 gap-4 my-3"
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    {projects.map(project => (
                        <motion.div
                            key={project.name}
                            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                            variants={fadeInUp}
                        >
                            <ProjectCard
                                project={project}
                                showDetail={showDetail}
                                setShowDetail={setShowDetail}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}

export default Projects;
