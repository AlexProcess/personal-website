import React from 'react'
import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { UiContext } from '../context/UiContext'

export const Sidebar = () => {
  const {toggleSideBar} = useContext(UiContext)
  
  return (
    <aside className='flex fixed top-0 left-0 w-screen h-screen bg-black'>
      <div className='px-5 h-20 flex items-center w-full justify-end'>
        <button onClick={toggleSideBar}><MdClose className='text-white text-3xl'/></button>
      </div>
    </aside>
  )
}
