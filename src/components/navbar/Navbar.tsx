import React, {FC} from 'react';
import Dropdown from '../dropdown/Dropdown';
const Navbar: FC = () =>{
    return (<>
            
        <nav className=' w-full h-12 h flex items-center justify-end px-10 bg-navy-blue'>
            <Dropdown></Dropdown>
        </nav>
    </>)
}

export default Navbar