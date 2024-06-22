import React from 'react'
import Header from '../sections/Header'
import Aside from '../sections/Aside'

export default function About(){
  return (
    <>
      <Header 
        class={'small'}
        header={'About'}
      />

      <main className='mainWithAside'>
      <div className='infoSection about'>      
            <h1 className='infoHeader'>About the Business</h1>
            
            <p className='info'> Mikkie Makes is a small creations business mainly focused on crochet and amigurumi. Adorable plushies, keychains, flowers, dice bags, and more!</p>
            
            <h1 className='infoHeader'>About Mikkie</h1>
            
            <p className='info'> Mikkie is a 23 year old crafter. She has been creating all her life, but started crocheting in November of 2023 after getting layed off from her job. While trying to figure out where to go from there, she decided to pick up a hobby, and found a passion! </p>

            <div className='externalLinks'>
              <i className="fa-brands fa-tiktok">TikTok</i>
              <i className="fa-brands fa-instagram" rel='https://www.instagram.com/mikkie_makes/'>Instagram</i>
              <i className="fa-brands fa-facebook">Facebook</i>
              <a href='https://mikkiemakes.etsy.com/' target='_blank'><i className="fa-brands fa-etsy" >Etsy</i></a>
            </div>
          </div>

          <Aside 
            img={'https://plus.unsplash.com/premium_photo-1675799745780-87b6fe5c5822?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            color={"brown"}
          />
      </main>
    </>
  )
}