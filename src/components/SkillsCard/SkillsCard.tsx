import {FC} from 'react'

const skillsPlaceHolder = ["HTML"," CSS"," SCSS"," JavaScript"," Node"," React"," Express"," MySQL"," PostgreSQL"," Agile Development"," Document Object Model (DOM) APIs"," Web APIs"," User Authentication"," OAuth"," Heroku"," Spring Boot"," Firebase"," Firestore"," GitHub"," Jest"," Python"," Java"," C"," Swift"," Xcode"," Android Studio"]

const SkillsCard:FC = () => {
    return(
    <div className='bg-navy-blue flex flex-wrap rounded-lg p-10'>
    {skillsPlaceHolder.map(skill => {
        return (
            <ul>
                <li className='bg-lime rounded-md p-2 m-2 text-dark-blue select-none'>
                    {skill}
                </li>
            </ul>
        )
    })}
    </div>)
}

export default SkillsCard