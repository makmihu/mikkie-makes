import { useContext } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

export default function CartCard(props){
  const {setCartCollection} = useContext(Context)

  function handleClick(id){
    setCartCollection(prev => prev.filter(thing => thing._id !== id));
  }

  return (
    <div className='card cartCard'>
      <div className='cardImgContainer'>
        <img className='cardImg' src={props.imgUrl} />
      </div>

      <h1 className='cardTitle'>{props.name}</h1>

      <div className='inputWLabel'>
        <span className='inventoryItem'>Price: </span>
        <span>${props.price}</span>
      </div>

      <div className='btnContainer multiple'>
      <Link to={`/${props._id}`}><button className='cardBtn'>View</button></Link>
            
        <button className='cardBtn' onClick={() => handleClick(props._id)}>Remove</button>
      </div>
    </div>
  )
}