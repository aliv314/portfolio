import { FC } from 'react'
import SkillTag from '../SkillTag/SkillTag'


const AboutCard: FC = () => {
    let skillsPlaceHolder: string[] = ["HTML", " CSS", " SCSS", " JavaScript", " Node", " React", " Express", " MySQL", " PostgreSQL", " Agile Development", " Document Object Model API", " Web APIs", " User Authentication", " OAuth", " Heroku", " Spring Boot", " Firebase", " Firestore", " GitHub", " Jest", " Python", " Java", "C", " Swift", " Xcode", "Android Studio"]

    skillsPlaceHolder.sort(function (a, b) {
        return Math.random() - 0.5  // sort by dictionary order
    });

    const name = `Alejandro Vecchio`
    const aboutText = `I’m a recent computer science and software engineering bootcamp graduate with a passion for problem solving and optimizing software solutions. Given my academic background, I’m committed to continuously expanding my knowledge and excel in fast-paced environments with high expectations.`

    return (
        <div className='bg-navy-blue items-center rounded-3xl p-10 flex flex-wrap flex-col'>
            <div className='mb-4 mr-auto'>
                <h1 className='text-xl mb-1'> {name} </h1>
                <p className='p-2 border-l-2 text-xs'> Full-Stack Software Engineer </p>
            </div>
            <div className='mb-4'>
                <p className='text-sm leading-[1.25rem]'> {aboutText} </p>
            </div>
            <div className='bg-navy-blue flex flex-wrap rounded-lg mb-4'>
                {skillsPlaceHolder.map(skill => {
                    return (
                        <ul>
                            <SkillTag skill={skill}></SkillTag>
                        </ul>
                    )
                })}
            </div>

        </div>

    )
}

export default AboutCard