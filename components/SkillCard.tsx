import React, { FunctionComponent } from 'react'
import { ISkills } from '../types'

const SkillCard: FunctionComponent<{ skill: ISkills }> = ({skill:{Icon, about, title}}) => {
    
    const createMarkup = () => {
        return {
            __html: about,
        }
    }
    
    return (
        <div className="flex items-center p-2 space-x-4 rounded-lg dark:bg-dark-200 dark:bg-black-500">
            <Icon className="w-12 h-12 text-purple"/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default SkillCard
