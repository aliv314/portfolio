import {FC} from 'react'

import daisyFront from "../../assets/images/images/DaisyFront.svg"
import daisyBack from "../../assets/images/images/DaisyBack.svg"
import devPic from '../../assets/images/images/DevPic.jpg'

const Hero: FC = () => {
    return (
        <div className="relative z-0 top-0  right-12 h-72 w-72"> 
            <img className="absolute w-72 h-72" src={daisyBack} alt=" Daisy Graphic Back"/>
            <img className="rotate-12 absolute w-72 h-72" src={daisyFront} alt="Daisy Graphic Front"/>
            <div className='relative h-72 w-72 flex items-center justify-center py-2'>
                <img className="absolute w-48 h-48 rounded-full object-cover" src={devPic} alt="Developer's headshot"/>
            </div>
        </div>
    )
    
}

export default Hero;