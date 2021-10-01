// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { NextPage } from "next";
import { useState } from "react";
import Projects from "../components/Projects";
import About from "../components/About";



const Home: NextPage = () => {

  const [toggleContent, setToggleContent] = useState<boolean>(false)

  return (  
    <>
      {!toggleContent ?
        <About toggleContent={toggleContent} setToggleContent={setToggleContent}/>
      : <Projects toggleContent={toggleContent} setToggleContent={setToggleContent}/>}
    </>
    
  )
}

export default Home;

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
