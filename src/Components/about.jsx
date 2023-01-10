import React from 'react'
import './About.css';
import {SiLinkedin} from 'react-icons/si'
import {GoMarkGithub} from 'react-icons/go'



export const About = () => {
  return (
    <>
    <div>
        <p className='b-presentation__name'>
            I'm Alex Front end dev started in 2020 with Wordpress. As a junior front end I like to give innovative or disruptive solutions and i love to be creative with UX. 
        </p>
    </div>
    <div className='flex items-center justify-between'>
      <a href='https://github.com/AlexProcess'><GoMarkGithub className="text-white text-3xl cursor-pointer"/></a> 
      <a href='https://www.linkedin.com/in/samuel-alejandro-teodoro-tercero-4bb944226/'><SiLinkedin className="text-white text-3xl"/></a>
    </div>
    </>
  )
}
