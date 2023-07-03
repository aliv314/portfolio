import React, {FC} from 'react'
import {Card} from "@material-tailwind/react"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface DropdownProps{
    title: String,
    toggleOpen: Function,
}

const Dropown:FC<DropdownProps> = (props) => {
    const {title, toggleOpen} = props;
    return (<>
            <div  onClick = {() => {toggleOpen()}} className ="bg-navy-blue px-6 rounded-3xl flex items-center justify-center h-[4rem] max-w-[480px] mb-2">
                <h2 className='text-lg mr-auto'> {title} </h2>
                {/* <ArrowRightAltIcon className='animate-turnside'/> */}
            </div>
    </>)
}

export default Dropown