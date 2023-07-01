import { FC } from 'react'

interface ProjectCardProps{
    projectData: Object,
}
const ProjectCard: FC<ProjectCardProps> = (props) => {
    const {projectData} = props;

    return (
        <li className=' bg-navy-blue '>

        </li>
    )
}

export default ProjectCard