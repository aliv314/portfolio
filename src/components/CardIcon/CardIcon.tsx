import { FC, ReactNode } from 'react'
interface CardIconProps {
    children: ReactNode,
}
const CardIcon: FC<CardIconProps> = (props) => {
    const {children} = props
    return (<div className='h-[3.5rem] w-[3.5rem] rounded-2xl flex items-center justify-center bg-lime p-2'>
        {children}
    </div>)
}

export default CardIcon