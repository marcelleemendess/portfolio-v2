import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, ISkills } from "./types";

export const skills: ISkills[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
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
    key_techs: ["React JS"]
  },
  {
    id: 2,
    name: "E-commerce",
    description: "The project is a E-commerce store where you can purchase electronics. It's possible to add and remove products to your cart and calculate the amount spent it.",
    github_url: "https://github.com/marcelleemendess/ecommerce",
    deployed_url: "https://competent-mayer-1fd506.netlify.app/",
    image_path: "/images/ecommerce.png",
    key_techs: ["React JS", "React Hooks", "Redux", "redux-thunk", "Axios", "Express JS", "MongoDB"]
  },
  {
    id: 3,
    name: "Netflix Clone",
    description:"A Netflix clone built using React. It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which are fetched from Youtube.",
    github_url:"https://github.com/marcelleemendess/netflix-clone",
    deployed_url: "https://dazzling-blackwell-399e74.netlify.app",
    image_path: "/images/netflix.png",
    key_techs:["Next JS","React Hooks", "Axios", "TMDB API" ]

  },
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
  
  }
]