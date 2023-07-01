import React, {FC} from 'react'
import {Card} from "@material-tailwind/react"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface DropdownProps{
    title: String,
    // toggleOpen: Function,
}

const Dropown:FC<DropdownProps> = (props) => {
    // const {title, toggleOpen} = props;
    const {title} = props;
    // const toggleOpen = () => setOpen(cur => !cur);
    return (<>
            <Card className ="bg-navy-blue px-6 flex flex-row  items-center justify-center w-full h-[4rem] max-w-[480px]">
                <h2 className='text-lg mr-auto'> {title} </h2>
                {/* <ArrowRightAltIcon className='animate-turnside'/> */}
            </Card>
    </>)
}

export default Dropown