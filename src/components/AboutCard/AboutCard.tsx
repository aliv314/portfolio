import {FC} from 'react'

const AboutCard:FC = () => {
    const name = `Alejandro Vecchio`
    const aboutText  = `I’m a recent computer science and software engineering bootcamp graduate with a passion for problem solving and optimizing software solutions. Given my academic background, I’m committed to continuously expanding my knowledge and excel in fast-paced environments with high expectations.`
      
    return (
        <div className='bg-navy-blue items-center rounded-3xl p-10 '>
            <div className=''>
                
            </div>
            <h1 className='text-xl mb-4'> {name} </h1>
            <p className='leading-6'> {aboutText} </p>
        </div>
    
    )
}

export default AboutCard