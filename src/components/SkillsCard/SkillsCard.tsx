import {FC} from 'react'

let skillsPlaceHolder:string[] = ["HTML"," CSS"," SCSS"," JavaScript"," Node"," React"," Express"," MySQL"," PostgreSQL"," Agile Development"," Document Object Model API"," Web APIs"," User Authentication"," OAuth"," Heroku"," Spring Boot"," Firebase"," Firestore"," GitHub"," Jest"," Python"," Java","C"," Swift"," Xcode","Android Studio"]
skillsPlaceHolder.sort(function(a, b) {
    return a.length - b.length || // sort by length, if equal then
           a.localeCompare(b);    // sort by dictionary order
  });


const SkillsCard:FC = () => {
    return(
    <div className='bg-navy-blue flex flex-wrap rounded-lg p-8'>
    {skillsPlaceHolder.map(skill => {
        return (
            <ul>
                <li className='bg-lime rounded-md p-2 m-2 flex items-center justify-center select-none'>
                    <p className='text-dark-blue text-center'>
                    {skill}
                    </p>
                </li>
            </ul>
        )
    })}
    </div>)
}

export default SkillsCard