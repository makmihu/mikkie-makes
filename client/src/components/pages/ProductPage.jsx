import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context'
import Header from '../sections/Header'
import Aside from '../sections/Aside'

export default function ProductPage(){
    
  const {inventoryCollection, setCartCollection} = useContext(Context)
  const {productId} = useParams()
  const chosenProduct = inventoryCollection.find( product => product._id === productId )

  function handleClick(){
    setCartCollection(prev => ([
      ...prev, 
      {
        ...chosenProduct
      }
    ]))
  }
  return (
    <>
      <Header 
        class={"small"} 
        header={chosenProduct.name}
      />

      <main className='mainWithAside'>
        <div className='productDescContainer'>    
          {/* <div className=''> */}
            <p className='info product'>{chosenProduct.description}</p>
            
            <p className='infoNoMargin'>**************************************</p>
            
            <div className='inputWLabel'>
              <p className='infoNoMargin'>Price:</p>
              <p className='infoNoMargin'>${chosenProduct.price}</p>
            </div>

            <p className='infoHeader'>Approximate Size:</p>
            <p className='info'>{chosenProduct.size}</p>
            
            <p className='infoHeader'>Materials: </p>
            <div className='info materialsList'>
              {chosenProduct.materials.map(x => <span className='materialSpan' key={x}>/ {x} /</span>)}
            </div>
          {/* </div> */}

          <button className='productBtn' onClick={handleClick}>Add to Cart</button>
        </div>
            
        <Aside 
          color={"green"}
          img={chosenProduct.imgUrl}
        />
      </main>
    </>
  )
}