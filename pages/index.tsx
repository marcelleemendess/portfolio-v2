// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { skills } from "../data"
import SkillCard from "../components/SkillCard";

const index = () => {

  return (
    
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I'm a passionate Front-End developer using web technologies to build products and focusing on solving problems with the power of technology.
        I've spent most of my time learning React.js and the new features, but I'm always excited to learn new technologies. 
        I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">
          My Skills
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map(skill => (
            <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default index;

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  
//   const res = await fetch('http://localhost:3000/api/skills')
//   const data = await res.json()

//   console.log("SKILLS", skills);
  
//   return {
//     props: {
//       skills: data.skills
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
  
//   const res = await fetch('http://localhost:3000/api/skills')
//   const data = await res.json()

//   console.log("SKILLS", skills);
  
//   return {
//     props: {
//       skills: data.skills
//     }
//   }
// }
