import React from 'react'

export default function Aside(props){
  return (
    <div className={`aside ${props.color}`}>
        <img className='asideImg'  src={props.img}/>
    </div>
  )
}