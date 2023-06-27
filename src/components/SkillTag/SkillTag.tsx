import { FC } from 'react'

interface TagProp {
    skill: String
}

const SkillTag: FC<TagProp> = (props) => {
    const { skill } = props;

    return (<li className='bg-lime text-dark-blue text-center whitespace-nowrap text-ellipsis overflow-auto rounded-md max-w-[100px] h-12 p-2 m-2 flex items-center select-none'>
        {skill}
    </li>)
}

export default SkillTag