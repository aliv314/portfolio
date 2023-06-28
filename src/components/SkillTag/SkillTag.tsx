import { FC } from 'react'
import SkillsCard from '../SkillsCard/SkillsCard';
interface TagProp {
    skill: String
}

const SkillTag: FC<TagProp> = (props) => {
    const { skill } = props;

    return (<li className='relative group '>
        <div className="absolute flex justify-center items-center bottom-[3.5rem] bg-dark-blue h-12 rounded-3xl px-4 py-4 invisible group-hover:visible">
            <p className='text-white w-full text-center whitespace-nowrap'>
                {skill}
            </p>
        </div>
        <div className='bg-lime rounded-md max-w-[7rem] h-12 px-2 py-5 m-2 flex items-center justify-start select-none'>
            <p className='text-dark-blue w-full text-ellipsis overflow-hidden text-center whitespace-nowrap'>
                {skill}
            </p>
        </div>
    </li>)
}

export default SkillTag