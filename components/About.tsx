import React, { useState } from "react";
import Navbar from "./Navbar"
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { skills } from "../data"
import SkillCard from "../components/SkillCard";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";



const About = ({ toggleContent, setToggleContent}) => {
   
    const [showDetail, setShowDetail] = useState<number | null>(null)
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    
    return (
        <>
        <Navbar toggleContent={toggleContent} setToggleContent={setToggleContent}  />
        <motion.div
          className="flex flex-col flex-grow px-6 pt-1"
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h5 className="my-3 font-medium">
            I'm a passionate <RoughNotationGroup show={true}><RainbowHighlight color={colors[0]}>Front-End developer</RainbowHighlight></RoughNotationGroup>  using web technologies to build user-friendly, simple and delightful products.
            I've spent most of my time learning <RoughNotationGroup show={true}><RainbowHighlight color={colors[0]}>React.js</RainbowHighlight></RoughNotationGroup> and the new features, but I'm always excited to learn new technologies.
            I will love to hear from you. Whether it's a project or just a chat. <RoughNotationGroup show={true}><RainbowHighlight color={colors[0]}>Feel free to contact me.</RainbowHighlight></RoughNotationGroup>
          </h5>
          <div
            className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
            <h6 className="my-3 text-xl font-bold tracking-wide">
              My Skills
            </h6>
            <motion.div className="grid gap-6 lg:grid-cols-2"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {skills.map(skill => (
                <motion.div
                  key={skill.title}
                  variants={fadeInUp}
                  // initial="initial"   info will come from the parent element
                  // animate="animate"
                  className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
            </motion.div>
        </>
    )
}

export default About;
