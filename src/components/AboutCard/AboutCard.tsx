import {FC} from 'react'
interface AboutCardProps{
    title: String,
    about: String
}

const AboutCard:FC<AboutCardProps>= (props) => {
    const {title, about} = props;
    return <>
        <div className='bg-navy-blue flex flex-wrap items-center rounded-lg p-12 '>
            <h1 className='mr-6 leading-4'> {title} </h1>
            <p className=''> {about} </p>
        </div>
    </>
}

export default AboutCard