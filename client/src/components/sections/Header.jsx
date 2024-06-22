import React from 'react'

export default function Header(props){
  return (
    <div className='header'>
      <div className={`logo ${props.class}`}></div> 
      <div className='headerBox'>
        <h1 className='headerText head'>{props.header}</h1>
        <p className='headerText sub'>{props.subHeader}</p>
      </div>
    </div>
  )
}