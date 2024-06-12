import { useContext, useState } from 'react'
import { Context } from '../../context'
import Header from '../sections/Header'
import Form from '../sections/Form'
import InventoryCard from '../sections/InventoryCard'

export default function Inventory(){
  const {inventoryCollection} = useContext(Context)  

  const inventoryMapped = inventoryCollection.map(info => (
    <InventoryCard 
      {...info}
      key={info._id}
    />
  ))

  return (
    <>
      <Header 
        header={'Inventory'}
      />
      
      <main>
        <Form />

        <div className='cardsContainer'>
          {inventoryMapped}
        </div>
      </main>
    </>
  )
}