import React, {FC, useState} from 'react'
import {Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button, 
    Collapse} from "@material-tailwind/react"

interface DropdownProps{
    title: String
}

const Dropown:FC<DropdownProps> = (props) => {
    const {title} = props;
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(cur => !cur);
    return (<>
            <Card className ="bg-navy-blue px-6 flex justify-center flex-wrap flex-col w-full h-[4rem] max-w-[480px]" onClick={() => {toggleOpen()}}>
                <h2 className='text-lg'> {title} </h2>  
                <img></img>  
            </Card>
    </>)
}

export default Dropown