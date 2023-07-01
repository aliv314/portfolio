import { FC } from 'react'
interface TagProp {
    skill: String
}

const SkillTag: FC<TagProp> = (props) => {
    const { skill } = props;

    return (<li className='mr-1 mb-1'>
        {/* Tooltip
        <div className="absolute flex justify-center items-center bottom-[3.5rem] bg-dark-blue h-12 rounded-3xl px-4 py-4 invisible group-hover:visible">
            <p className='select-none text-white w-full text-center whitespace-nowrap'>
                {skill}
            </p>
        </div> */}
        <div className='bg-lime rounded-3xl px-2 py-2 mr-auto flex items-center justify-start select-none'>
            <p className='text-xs text-dark-blue w-full text-ellipsis overflow-hidden text-center whitespace-nowrap'>
                {skill}
            </p>
        </div>
    </li>)
}

export default SkillTag