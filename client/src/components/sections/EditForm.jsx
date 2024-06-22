import { useState, useContext} from 'react'
import { Context } from '../../context'

export default function EditForm(props){
  const {handleChange, handleChecked, handleSubmit, inputs} = props

  return (
     <form onSubmit={handleSubmit} className='cardMain topRounded'> 
      <div className='inputWLabel'>
        <label htmlFor='name'>Name:</label>
        <input
          className="formInputs wide"
          id='name' 
          type="text" 
          name="name" 
          value={inputs.name} 
          onChange={handleChange} 
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='imgUrl'>Image Url:</label>
        <textarea
          className="formInputs tall wide" 
          type="imgUrl" 
          name="imgUrl" 
          value={inputs.imgUrl} 
          onChange={handleChange} 
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='description'>Description:</label>
        <textarea 
          id='description'
          className='formInputs tall wide'
          name="description" 
          value={inputs.description} 
          onChange={handleChange} 
          placeholder="Product Description"
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='size'>Size:</label>
        <textarea
          className="formInputs tall wide"
          id='size' 
          type="text" 
          name="size" 
          value={inputs.size} 
          onChange={handleChange} 
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='price'>Price:</label>
        <input
          className='formInputs num'
          id='price' 
          type='number'
          name='price'
          value={inputs.price}
          onChange={handleChange}
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='quantity'>Quantity:</label>
        <input
          className='formInputs num'
          id='quantity'
          type='number'
          name='quantity'
          value={inputs.quantity}
          onChange={handleChange}
        />
      </div>

      <div className='inputWLabel'>
      <label htmlFor='yarnWeight'>Majority Weight:</label>
        <input 
          className='formInputs num'
          id='yarnWeight'
          type='number'
          name='yarnWeight'
          value={inputs.yarnWeight}
          onChange={handleChange}
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='type'>What Type of Product:</label>
        <select
          className='formInputs select' 
          id="type" 
          value={inputs.type}
          onChange={handleChange}
          name="type"
        >
          <option value="select">-Select One-</option>
          <option value="Plushie">Plushie</option>
          <option value="Keychain">Keychain</option>
          <option value="Amigurumi">Amigurumi</option>
          <option value="Floral">Floral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className='inputWLabel'>
        <label  htmlFor='madeToOrder'>Made to Order?</label>
        <input 
          type="checkbox" 
          id='madeToOrder'
          name="madeToOrder" 
          checked={inputs.madeToOrder} 
          onChange={handleChange} 
        />
      </div>

      <div className='inputWLabel'>
        <label htmlFor='colorOptions'>Number of color options:</label>
        <input
          className='formInputs num'
          id='colorOptions'
          type='number'
          name='colorOptions'
          value={inputs.colorOptions}
          onChange={handleChange}
        />
      </div>

      <div>
        <legend className='materialLegend'>What Materials Is This Made Of?</legend>          
       
        <div className='checkboxContainer'>
          <div className='left'>         
            <input 
              type="checkbox" 
              id='acrylicYarn'
              value={'Acrylic Yarn'} 
              name="acrylicYarn"
              checked={inputs.materials.includes('Acrylic Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='acrylicYarn'>Acrylic Yarn</label>
          </div> 

          <div className='right'>
            <input 
              type="checkbox" 
              id='polyFil'
              value={'Poly-FIL'}
              name="polyFil" 
              checked={inputs.materials.includes('Poly-FIL')} 
              onChange={handleChecked} 
            />
            <label htmlFor='polyFil'>Poly-FIL</label>
          </div>

          <div className='left'>
            <input 
              type="checkbox" 
              id='chenilleYarn'
              value={'Chenille Yarn'}
              name="chenilleYarn" 
              checked={inputs.materials.includes('Chenille Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='chenilleYarn'>Chenille Yarn</label>
          </div>

          <div className='right'>
            <input 
              type="checkbox" 
              id='safetyEyes'
              value={'Safety Eyes'}
              name="safetyEyes" 
              checked={inputs.materials.includes('Safety Eyes')} 
              onChange={handleChecked} 
            />
            <label htmlFor='safetyEyes'>Safety Eyes</label>
          </div>

          <div className='left'>
            <input 
              type="checkbox" 
              id='blendedYarn'
              value={'Blended Yarn'}
              name="blendedYarn" 
              checked={inputs.materials.includes('Blended Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='blendedYarn'>Blended Yarn</label>
          </div>

          <div className='right'>         
            <input 
              type="checkbox" 
              id='wire'
              value={'Wire'} 
              name="wire"
              checked={inputs.materials.includes('Wire')} 
              onChange={handleChecked} 
            />
            <label htmlFor='wire'>Wire</label>
          </div> 

          <div className='left'>
            <input 
              type="checkbox" 
              id='noveltyYarn'
              value={'Novelty Yarn'}
              name="noveltyYarn" 
              checked={inputs.materials.includes('Novelty Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='noveltyYarn'>Novelty Yarn</label>
          </div>

          <div className='right'>
            <input 
              type="checkbox" 
              id='beads'
              value={'Beads'}
              name="beads" 
              checked={inputs.materials.includes('Beads')} 
              onChange={handleChecked} 
            />
            <label htmlFor='beads'>Beads</label>
          </div>

          <div className='left'>
            <input 
              type="checkbox" 
              id='blanketYarn'
              value={'Blanket Yarn'}
              name="blanketYarn" 
              checked={inputs.materials.includes('Blanket Yarn')} 
              onChange={handleChecked} 
            />
            <label htmlFor='blanketYarn'>Blanket Yarn</label>
          </div>

          <div className='right'>
            <input 
              type="checkbox" 
              id='floralTape'
              value={'Floral Tape'}
              name="floralTape" 
              checked={inputs.materials.includes('Floral Tape')} 
              onChange={handleChecked} 
            />
            <label htmlFor='floralTape'>Floral Tape</label>
          </div>

          <div className='left'>
            <input 
              type="checkbox" 
              id='hotGlue'
              value={'Hot Glue'}
              name="hotGlue" 
              checked={inputs.materials.includes('Hot Glue')} 
              onChange={handleChecked} 
            />
            <label htmlFor='hotGlue'>Hot Glue</label>
          </div>

          <div className='right'>
            <input 
              type="checkbox" 
              id='tissuePaper'
              value={'Tissue Paper'}
              name="tissuePaper" 
              checked={inputs.materials.includes('Tissue Paper')} 
              onChange={handleChecked} 
            />
            <label htmlFor='tissuePaper'>Tissue Paper</label>
          </div>

          <div className='left'>
            <input 
              type="checkbox" 
              id='ribbon'
              value={'Ribbon'}
              name="ribbon" 
              checked={inputs.materials.includes('Ribbon')} 
              onChange={handleChecked} 
            />
            <label htmlFor='ribbon'>Ribbon</label>
          </div>

          <div className='right'>
            <input 
              type="checkbox" 
              id='keychainLoop'
              value={'Keychain Loop'}
              name="keychainLoop" 
              checked={inputs.materials.includes('Keychain Loop')} 
              onChange={handleChecked} 
            />
            <label htmlFor='keychainLoop'>Keychain Loop</label>
          </div>

          <div className='left'>
            <input 
              type="checkbox" 
              id='keychainHook'
              value={'Keychain Hook'}
              name="keychainHook" 
              checked={inputs.materials.includes('Keychain Hook')} 
              onChange={handleChecked} 
            />
            <label htmlFor='keychainHook'>Keychain Hook</label>
          </div>
        </div>
      </div>

      <div className='btnContainer single'>
        <button className='editFormBtn'>Save Changes</button>
      </div>
    </form>
  )
}