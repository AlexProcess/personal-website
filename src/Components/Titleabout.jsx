import React from 'react'
import './Titleabout.css';


export const Titleabout = () => {
  return (
    <h1>
        <span style="--start-color:#007CF0; --end-color:#00DFD8; --content: 'Front';">
            Front
        </span>
        <span style="--start-color:#7928CA; --end-color:#FF0080; --content: 'End'; --animation:a2;">
            End
        </span>
        <span style="--start-color:#FF4D4D; animation-name:a3; --end-color:#F9CB28; --content: 'Dev'; --animation: a3">
            Dev
        </span>
    </h1>
  )
}
