import { FC } from 'react'
import screenshot from "../../assets/images/images/screenshots/pantrykeeper.png"
const ProjectCard: FC = () => {
    const project = [
        {
            id: 0, 
            screenshot: screenshot,
            alt: "Screenshot for PantryKeeper",
            title:"PantryKeeper",
            desc:"PantryKeeper is a ReactJS webapplication designed to provide a solution to household food waste",
            skills: ["JavaScript", "React", "Firebase", "Firestore", "Express", "NodeJS", "User Authentication", "Firestore", "Node", "CSS", "SCSS", ""]
        },
    ]
    return (
        <div className='bg-navy-blue rounded-3xl min-h-[500px] w-full p-4'>
            <img className='w-full max-h-[250px] object-cover object-center rounded-3xl' src={project[0].screenshot} alt={project[0].alt}></img>
            <div></div>
        </div>
    )
}

export default ProjectCard