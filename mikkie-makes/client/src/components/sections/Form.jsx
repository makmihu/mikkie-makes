import { useState, useContext} from 'react'
import { Context } from '../../context'

export default function Form(){
  const { addProduct } = useContext(Context)
  const initInputs = {
    name: '', 
    imgUrl: '', 
    size: '', 
    description: '', 
    price: '', 
    type: '', 
    madeToOrder: false, 
    colorOptions: '', 
    materials: [], 
    yarnWeight: '', 
    quantity: '' 
  }
  const [inputs, setInputs] = useState(initInputs)

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
    console.log(inputs)
    addProduct(inputs)
    setInputs(initInputs)
  }

  return (
     <form onSubmit={handleSubmit} className='formBox'> 
      <div className='formTopLeft'>
        <input
          className='formItem input' 
          type="text" 
          name="name" 
          value={inputs.name} 
          onChange={handleChange} 
          placeholder="Product Name"
        />

        <input
          className='formItem input' 
          type="text" 
          name="imgUrl" 
          value={inputs.imgUrl} 
          onChange={handleChange} 
          placeholder="Image Url"
        />
              
        <input
          className='formItem input' 
          type="text" 
          name="size" 
          value={inputs.size} 
          onChange={handleChange} 
          placeholder="Size"
        />
      </div>

      <textarea
        className='formTopRight formItem textarea' 
        name="description" 
        value={inputs.description} 
        onChange={handleChange} 
        placeholder="Product Description"
      />

      <div className='formBottom bottomLeft'>
        <input
          className='formItem input' 
          type='number'
          name='price'
          value={inputs.price}
          onChange={handleChange}
          placeholder='Price'
        />


        <input
          className='formItem input' 
          type='number'
          name='quantity'
          value={inputs.quantity}
          onChange={handleChange}
          placeholder='Quantity'
        />

        <input
          className='formItem input' 
          type='number'
          name='yarnWeight'
          value={inputs.yarnWeight}
          onChange={handleChange}
          placeholder='Majority Yarn Weight'
        />
      </div>
    
      <div className='formBottom bottomMiddle'>
        <div className='selectContainer labels'>
          <label htmlFor='type' className='labels mainLabels'>What Type of Product:  </label>
          
          <select 
            id="type" 
            value={inputs.type}
            onChange={handleChange}
            name="type"
            className='formSelectBox'
          >
            <option value="">- Please Select One -</option>
            <option value="Plushie">Plushie</option>
            <option value="Keychain">Keychain</option>
            <option value="Amigurumi">Amigurumi</option>
            <option value="Floral">Floral</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className='formSingleCheckbox'>
          <legend className='labels mainLabels centered'>Is This Item Made to Order? </legend>
          
          <div className='centered'>
            <label  htmlFor='madeToOrder' className='labels mainLabels'>Check if Yes:   </label>
            <input 
              type="checkbox" 
              id='madeToOrder'
              name="madeToOrder" 
              checked={inputs.madeToOrder} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <input
          className='formItem input' 
          type='number'
          name='colorOptions'
          value={inputs.colorOptions}
          onChange={handleChange}
          placeholder='Number of Color Options'
        />
      </div>

      <div className='formBottom bottomRight'>
        <legend className='labels mainLabels centered'>What Materials Is This Made Of?</legend>          
       
        <div className='formCheckboxContainer'>
          <div>         
            <input 
              type="checkbox" 
              id='acrylicYarn'
              value={'Acrylic Yarn'} 
              name="acrylicYarn"
              checked={inputs.materials.includes('Acrylic Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='acrylicYarn' className='labels'>Acrylic Yarn</label>
          </div> 

          <div>
            <input 
              type="checkbox" 
              id='polyFil'
              value={'Poly-FIL'}
              name="polyFil" 
              checked={inputs.materials.includes('Poly-FIL')} 
              onChange={handleChecked} 
            />
            <label htmlFor='polyFil' className='labels'>Poly-FIL</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='safetyEyes'
              value={'Safety Eyes'}
              name="safetyEyes" 
              checked={inputs.materials.includes('Safety Eyes')} 
              onChange={handleChecked} 
            />
            <label htmlFor='safetyEyes' className='labels'>Safety Eyes</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='chenilleYarn'
              value={'Chenille Yarn'}
              name="chenilleYarn" 
              checked={inputs.materials.includes('Chenille Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='chenilleYarn' className='labels'>Chenille Yarn</label>
          </div>

          <div>         
            <input 
              type="checkbox" 
              id='wire'
              value={'Wire'} 
              name="wire"
              checked={inputs.materials.includes('Wire')} 
              onChange={handleChecked} 
            />
            <label htmlFor='wire' className='labels'>Wire</label>
          </div> 

          <div>
            <input 
              type="checkbox" 
              id='beads'
              value={'Beads'}
              name="beads" 
              checked={inputs.materials.includes('Beads')} 
              onChange={handleChecked} 
            />
            <label htmlFor='beads' className='labels'>Beads</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='blendedYarn'
              value={'Blended Yarn'}
              name="blendedYarn" 
              checked={inputs.materials.includes('Blended Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='blendedYarn' className='labels'>Blended Yarn</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='floralTape'
              value={'Floral Tape'}
              name="floralTape" 
              checked={inputs.materials.includes('Floral Tape')} 
              onChange={handleChecked} 
            />
            <label htmlFor='floralTape' className='labels'>Floral Tape</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='hotGlue'
              value={'Hot Glue'}
              name="hotGlue" 
              checked={inputs.materials.includes('Hot Glue')} 
              onChange={handleChecked} 
            />
            <label htmlFor='hotGlue' className='labels'>Hot Glue</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='noveltyYarn'
              value={'Novelty Yarn'}
              name="noveltyYarn" 
              checked={inputs.materials.includes('Novelty Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='noveltyYarn' className='labels'>Novelty Yarn</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='tissuePaper'
              value={'Tissue Paper'}
              name="tissuePaper" 
              checked={inputs.materials.includes('Tissue Paper')} 
              onChange={handleChecked} 
            />
            <label htmlFor='tissuePaper' className='labels'>Tissue Paper</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='ribbon'
              value={'Ribbon'}
              name="ribbon" 
              checked={inputs.materials.includes('Ribbon')} 
              onChange={handleChecked} 
            />
            <label htmlFor='ribbon' className='labels'>Ribbon</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='blanketYarn'
              value={'Blanket Yarn'}
              name="blanketYarn" 
              checked={inputs.materials.includes('Blanket Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='blanketYarn' className='labels'>Blanket Yarn</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='keychainLoop'
              value={'Keychain Loop'}
              name="keychainLoop" 
              checked={inputs.materials.includes('Keychain Loop')} 
              onChange={handleChecked} 
            />
            <label htmlFor='keychainLoop' className='labels'>Keychain Loop</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              id='keychainHook'
              value={'Keychain Hook'}
              name="keychainHook" 
              checked={inputs.materials.includes('Keychain Hook')} 
              onChange={handleChecked} 
            />
            <label htmlFor='keychainHook' className='labels'>Keychain Hook</label>
          </div>
        </div>
      </div>

      <div className='btnContainer single'>
        <button className='formBtn'>Save New Product</button>
      </div>
    </form>
  )
}