import {FC} from 'react'
interface AboutCardProps{
    title: String,
    about: String
}

const AboutCard:FC<AboutCardProps>= (props) => {
    const {title, about} = props;
    return <>
        <div className='bg-navy-blue items-center rounded-3xl p-10 '>
            <h1 className='text-3xl mb-4'> {title} </h1>
            <p className='leading-6'> {about} </p>
        </div>
    </>
}

export default AboutCard