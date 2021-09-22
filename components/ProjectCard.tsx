import { FunctionComponent } from "react"
import { AiFillGithub } from "react-icons/ai"
import { IProject } from "../types"


const ProjectCard: FunctionComponent<{
    project: IProject
}> = ({
    project: {
        name,
        image_path,
        deployed_url,
        description,
        github_url,
        key_techs
    }
}) => {
    return (
        <div>
            <img src={image_path} alt={name} className="cursor-pointer" />
            <p className="my-2 text-center">{name}</p>


            <div className="grid md:grid-cols-2">
                <div>
                    <img src={image_path} alt={name} className="" />
                    <div>
                        <a href={github_url}>
                            <AiFillGithub/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
