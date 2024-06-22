import { useContext } from 'react'
import { Context } from '../../context'
import Header from '../sections/Header'
import HomeCard from '../sections/HomeCard'

export default function Home(){
  const { inventoryCollection } = useContext(Context)

  const productsMapped = inventoryCollection.map(info => (
    <HomeCard 
      key={info._id}
      {...info}
    />
  ))

  return (
    <>
      <Header 
        class={'big'}
        header={'Mikkie Makes'}
        subHeader={"Crochet, Amigurumi, & More!"}
      />
      <main>
        <div className='cardsContainer'>
          {productsMapped}
        </div>
      </main>
    </>
  )
}