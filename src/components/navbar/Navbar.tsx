import React, {FC} from 'react';
import Dropdown from '../dropdown/Dropdown';
const Navbar: FC = () =>{
    return (<>
        <nav className=' fixed w-full h-12 h flex items-center justify-end px-2 bg-navy-blue'>
            <Dropdown/>
        </nav>
    </>)
}

export default Navbar