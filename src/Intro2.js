import React from 'react'
import arrow from './img1/arrow.png'
import star from './img1/stargra.png'
import idea from './img1/idea.png'
import './Intro2.css'

function Intro2() {
  return (
    <div className='intro2'>
      <img src={star} alt='' className='star' />
      <img src={idea} alt='' className='idea'/>
      <img src={arrow} alt='' className='arrow'/>
      <div className='intro2-title'>
          <div className='intro2-text'>Introduction to getlinked<span> tech Hackathon 1.0</span></div>
          <img src={star} alt=''/>
      </div>
      <div className='intro2-main-text'>
        Our tech hackathon is a melting pot of visionaries and its purpose is as clear as day to shape the future. Whether you're a coding gemius, a design maverick or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundariesof technology, and creating solutions that can change the world, that's what we're all about!  
      </div>
    </div>
  )
}

export default Intro2
