import { useContext, useState } from 'react'
import { Context } from '../../context'
import EditForm from './EditForm'

export default function ProductCard(props){
  const {deleteProduct, editProduct} = useContext(Context)
  const [toggle, setToggle] = useState()
  const [inputs, setInputs] = useState(props)

  function handleChange(e){
    const {name, value, type, checked} = e.target 
    setInputs(prev => ({...prev, [name]: type === "checkbox" ? checked : value}))
  }

  function handleChecked(e){
    const {name, value, type, checked} = e.target
    if(checked === true){
      setInputs(prev => ({
        ...prev,
        materials: [...prev.materials, value]
      }))
    } else {
      setInputs(prev => ({
        ...prev,
        materials: prev.materials.filter(material => material != value )
      }))
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    editProduct(inputs, props._id)
    setToggle(prev => !prev)
  }
  return (
    <div className='card inventoryCard'>
      {!toggle ?
      <>
      <h1 className='cardTitle titleWBackground'>{props.name}</h1>

      <div className='cardImgContainer'>
        <img className='cardImg' src={props.imgUrl} />
      </div>

      <div className='cardMain topFlat'>
        <div className='inventoryDescr'>
          <p className='inventoryItem'>{props.description}</p>
        </div>
        
        <div className='inputWLabel border'>
          <span className='inventoryItem'>Price: </span>
          <span>${props.price}</span>
        </div>
        
        <div className='inputWLabel border'>
          <span className='inventoryItem'>Type:</span> 
          <span>{props.type}</span>
        </div>
        
        <div className='inputWLabel border'>
          <span className='inventoryItem'>Size:</span> 
          <span>{props.size}</span>
        </div>
        
        <div className='inputWLabel border '>
          <span className='inventoryItem'>Made to Order:</span>
          <span>{props.madeToOrder ? 'Yes' : 'No'}</span>
        </div>
        
        
        
        <div className='inputWLabel border'>
          <span className='inventoryItem'>Color Options: </span>
          <span>{props.colorOptions}</span>
        </div>
        
        
        <p>Materials</p>
        <div className='materialsList inventoryMaterials'>
          {props.materials.map(x => <span className='materialSpan' key={x}>/ {x} / </span>)}
        </div>

        <p className='inventoryItem'>Majority Yarn Weight: {props.yarnWeight}</p>
      </div>
      
      </>
      :
      <>
        <EditForm 
          handleChange={handleChange}
          handleChecked={handleChecked}
          handleSubmit={handleSubmit}
          inputs={inputs}
        />
      </>
      } 

      <div className='btnContainer multiple'>
        <button 
          className='cardBtn'
          onClick={() => deleteProduct(props._id)}
        >Delete</button>

        <button 
          className='cardBtn'
          onClick={() => setToggle(prev => !prev)}
        >
          {!toggle ? "Edit" : "Close"}
        </button>
      </div>
    </div>
  )
}