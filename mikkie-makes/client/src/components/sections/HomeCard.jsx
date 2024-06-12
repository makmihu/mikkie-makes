import { useContext } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

export default function HomeCard(props){
  const {setCartCollection} = useContext(Context)

  function handleClick(){
    setCartCollection(prev => ([
      ...prev,
      {
      ...props
      }
    ]))
  }

  return (
    <div className='card productCard'>
      <h1 className='cardTitle titleWBackground'>{props.name}</h1>

      <div className='cardImgContainer'>
        <img className='cardImg' src={props.imgUrl} />
      </div>
      
      <div className='cardMain topFlat'>
      <p className='homeDescr'>{props.description}</p>
      </div>

      <div className='btnContainer multiple'>
        <Link to={`${props._id}`}><button className='cardBtn'>View</button></Link>
    
        <button className='cardBtn' onClick={handleClick}>Add to Cart</button>
      </div> 
    </div>
  )
}