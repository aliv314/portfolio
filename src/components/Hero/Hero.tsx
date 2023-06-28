import {FC} from 'react'

import daisyFront from "../../assets/images/images/DaisyFront.svg"
import daisyBack from "../../assets/images/images/DaisyBack.svg"
import devPic from '../../assets/images/images/DevPic.jpg'

const Hero: FC = () => {
    return (
        <div className="relative z-0 top-0 select-none right-10 w-[16rem] h-[16rem]"> 
            <img className="absolute w-[16rem] h-[16rem]" src={daisyBack} alt=" Daisy Graphic Back"/>
            <img className="rotate-12 absolute w-[16rem] h-[16rem]" src={daisyFront} alt="Daisy Graphic Front"/>
            <div className='relative w-[16rem] h-[16rem] flex items-center justify-center py-2'>
                <img className="absolute w-[12rem] h-[12rem] rounded-full object-cover" src={devPic} alt="Developer's headshot"/>
            </div>
        </div>
    )    
}

export default Hero;