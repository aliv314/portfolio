import { FC } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import CardIcon from '../CardIcon/CardIcon';
import testIcon from '../../assets/images/icons/about-icon.svg'

interface ProjectCardProps{
    title: String,
    description: String,
}
const ProjectCard: FC<ProjectCardProps> = (props) => {
    const {title, description} = props;

    return (
        <Card className='bg-navy-blue flex flex-row flex-wrap relative w-full max-w-[480px] h-[4rem]'>
            <CardIcon>
                <img className='h-full' src={testIcon} alt="test"></img>
            </CardIcon>
            <div>
                <h4 className=''> {title} </h4>
                <p className=''> {description} </p>
            </div>
        </Card>
    )
}

export default ProjectCard