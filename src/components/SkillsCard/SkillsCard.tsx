import {FC} from 'react'
import SkillTag from '../SkillTag/SkillTag'
let skillsPlaceHolder:string[] = ["HTML"," CSS"," SCSS"," JavaScript"," Node"," React"," Express"," MySQL"," PostgreSQL"," Agile Development"," Document Object Model API"," Web APIs"," User Authentication"," OAuth"," Heroku"," Spring Boot"," Firebase"," Firestore"," GitHub"," Jest"," Python"," Java","C"," Swift"," Xcode","Android Studio"]
skillsPlaceHolder.sort(function () {
    return Math.random() - 0.5   // sort by dictionary order
  });


const SkillsCard:FC = () => {
    return(
    <div className='bg-navy-blue flex flex-wrap rounded-lg p-8'>
    {skillsPlaceHolder.map(skill => {
        return (
            <ul>
                <SkillTag skill = {skill}></SkillTag>
            </ul>
        )
    })}
    </div>)
}

export default SkillsCard