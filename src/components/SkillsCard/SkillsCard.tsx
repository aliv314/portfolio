import {FC} from 'react'

const skillsPlaceHolder = ["HTML"," CSS"," SCSS"," JavaScript"," Node"," React"," Express"," MySQL"," PostgreSQL"," Agile Development"," Document Object Model (DOM) APIs"," Web APIs"," User Authentication"," OAuth"," Heroku"," Spring Boot"," Firebase"," Firestore"," GitHub"," Jest"," Python"," Java"," C"," Swift"," Xcode"," Android Studio"]
const skills = true
const SkillsCard:FC = () => {
    return(<div>
    {skills && skillsPlaceHolder.map(skill => {
        return (
            <p>
                {skill}
            </p>
        )
    })}
    </div>)
}

export default SkillsCard