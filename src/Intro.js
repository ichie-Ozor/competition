import React from 'react'
import arc from './img1/arc.png'
import fire from './img1/fire.png'
import chain from './img1/chain.png'
import creative from './img1/Creative.png'
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>
      <div className="head">Igniting a Revolution in HR innovation</div>
      <img src={arc} alt='' className='arc'/>
      <img src={creative} alt='' className='creative'/>
      <div className='title'>getlinked Tech Hackathon <span>1.0</span>
      <img src={chain} alt='' className='chain'/>
      <img src={fire} alt='' className='fire'/>
      </div>
      <div className='title-text'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</div>
      <button>Register</button>
      <div className='timer'>00<span>H</span>  00<span>M</span>  00<span>S</span></div>
    </div>
  )
}

export default Intro
