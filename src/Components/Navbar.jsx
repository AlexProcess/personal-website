import React, { useContext } from 'react'
import {MdMenu, MdOutlineWbSunny} from 'react-icons/md'
import { UiContext } from '../context/UiContext'


export const Navbar = () => {
    const {toggleSideBar} = useContext(UiContext)
    
    
  return (
    <header className=' px-5 h-20 flex items-center justify-between'> 
            <button className='h-12 w-12 text-white '>
                <MdOutlineWbSunny/>
            </button>
            //light mode to implement  
        <ul className='hidden'>
            <li className='text-gris'>About me</li> 
            <li className='text-gris'>Projects</li> 
            <li className='text-gris'>Experience</li> 
            <li className='text-gris'>Skills</li> 
            <li className='text-gris'>Contact form</li> 
        </ul>
        <button onClick={toggleSideBar} type='button'>
            <MdMenu className='text-white text-3xl'/>
        </button>
    </header>
        //dark and light mode to implement
  )
}

