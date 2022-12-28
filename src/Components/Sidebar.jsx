import React from 'react'
import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { UiContext } from '../context/UiContext'

export const Sidebar = () => {
  const {toggleSideBar} = useContext(UiContext)
  
  return (
    <aside className='px-5 flex flex-col items-center fixed top-0 left-0 w-screen h-screen bg-black'>
      <div className=' h-20 flex items-center w-full justify-end'>
        <button onClick={toggleSideBar}><MdClose className='text-white text-3xl'/></button>
      </div>
      <div className='w-full'>
        <ul className='w-full flex flex-col gap-5'>
          <li className='text-white w-full px-5 py-2 border border-gris rounded-md'><a className='w-full text-center block text-sm ' href=''>Contact</a> </li> 
          <li className='text-white w-full border-b pb-2'>About me</li> 
          <li className='text-white w-full border-b pb-2'>Projects</li> 
          <li className='text-white w-full border-b pb-2'>Experience</li> 
          <li className='text-white w-full border-b pb-2'>Skills</li> 
        </ul>
      </div>
    </aside>
  )
}
