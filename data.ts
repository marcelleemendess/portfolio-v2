import { RiComputerLine, RiToolsFill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { IProject, ISkills } from "./types";
import { FaServer } from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"

export const skills: ISkills[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Build a scalable SPA using <b>TypeScript</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>CSS preprocessors (All)</b> ",
  },
  {
    Icon: BiCodeBlock,
    title: "Libraries & Frameworks",
    about:
      "Experience with <b>React JS</b>, <b>Next JS</b>, <b>Vue JS</b>, <b>Nuxt JS</b>,<b>GraphQL</b>, <b>Apollo Client</b>, <b>Tailwind CSS</b> and <b>Bootstrap</b>",
  },
  {
    Icon: RiToolsFill,
    title: "Tools & Platforms",
    about:
      "Experience with <b>Git</b>, <b>Git Flow</b>, <b>Firebase</b>, <b>Netlify</b>, <b>Heroku</b>, <b>Postman</b>, <b>Docker</b>, <b>Jenkins</b>, <b>MySQL Workbench</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX",
    about:
      "Build user interface designer using <b>Figma</b> and <b>Adobe XD</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "knowledge building Microservices with <b>.NET 6</b>  and <b>C#</b>, <b>Node JS</b>, <b>Express JS</b>, <b>MongoDB</b>, <b>MySQL</b>",
  },
   {
    Icon: BsFillPeopleFill,
    title: "Soft Skills",
     about:
      "Handle <b>Teamwork</b>, <b>Good Communication</b>, <b>Problem-solving</b>, <b>Creative</b> and constant <b>Learning</b>"
  },
];

export const projects:IProject[] = [
  {
    id: 1,
    name: "Dealsourcr",
    description:"Dealsourcr Ltd. is a company that helps investors and deal sourcers find the highest ROI property deals in the UK.",
    github_url: "https://dealsourcr.com/",
    deployed_url: "https://dealsourcr.com/",
    image_path: "/images/dealsourcr.png",
    key_techs: ["React JS", "Python", "external API"]
  },
  {
    id: 2,
    name: "Delivery Page",
    description: "The project is a Responsive Delivery Page store with a modern design. It was developed with the following technologies: HTML, CSS(SCSS), and Vanilla Javascript.",
    github_url: "https://github.com/marcelleemendess/delivery-landing-page",
    deployed_url: "https://delivery-landing-page-livid.vercel.app/",
    image_path: "/images/delivery-page.png",
    key_techs: ["HTML", "CSS(SCSS)", "JavaScript"]
  },
  {
    id: 3,
    name: "Notes with Tags",
    description:"Markdown Supported Note Taking With Categories. This project was created with Vite and Typescript. It is possible to create notes, edit and delete, and create tags. You can also filter your notes by specific tags.",
    github_url:"https://github.com/marcelleemendess/vite-project-notes-typescript-react",
    deployed_url: "https://vite-project-notes-typescript-react.vercel.app",
    image_path: "/images/notes.png",
    key_techs:["Next JS","React Hooks", "Axios", "TMDB API" ]

  },
  {
    id: 4,
    name: "Netflix Clone",
    description:"A Netflix clone built using React. It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which are fetched from Youtube.",
    github_url:"https://github.com/marcelleemendess/netflix-clone",
    deployed_url: "https://dazzling-blackwell-399e74.netlify.app",
    image_path: "/images/netflix.png",
    key_techs:["Next JS","React Hooks", "Axios", "TMDB API" ]

  },
  /*
  {
    id: 4,
    name: "Bookshelf",
    description:"The project is a web application used to look up Books. It's possible to find the books easily using ISBN, title, or author.",
    github_url:"https://github.com/marcelleemendess/bookshelf-",
    deployed_url: "https://bookshelf-ten.vercel.app/",
    image_path: "/images/bookshelf.png",
    key_techs:["Next JS", "React Hooks", "Axios", "external API"]
  },
  {
    id: 5,
    name: "To Do List",
    description:"The project is a functional To-do list application with authentication, you can create an account and add, complete or delete your tasks.",
    github_url:"https://github.com/marcelleemendess/todolist",
    deployed_url: "https://todolist-five-teal.vercel.app/",
    image_path: "/images/todo.png",
    key_techs:["Next JS", "React Hooks", "Axios", "Firebase/Firestore"]
  
  }*/
]